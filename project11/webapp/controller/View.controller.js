sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  (Controller, JSONModel, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("project11.controller.View", {
      onInit() {
        const oModel = new JSONModel();
        this.getView().setModel(oModel, "view");
        oModel.setProperty("/SelectedGender", "");
      },

      //반
      onFilterClass: function () {
        const aFilter = [];

        // Input field 값 가져오기
        const sQuery = this.byId("class").getValue();

        // 값이 있을 경우 필터 생성
        if (sQuery) {
          aFilter.push(new Filter("class", FilterOperator.Contains, sQuery));
        }

        // 테이블과 바인딩 가져와서 필터 적용
        const oTable = this.byId("mTable");
        const oBinding = oTable.getBinding("items");
        oBinding.filter(aFilter); // 여기서 클래스 필터를 적용합니다.
      },

      onSelectGender: function (oEvent) {
        var sGender = oEvent.getParameter("selectedItem").getKey();
        var oTable = this.byId("mTable");
        var oBinding = oTable.getBinding("items");

        const aFilter = [];

        // 성별 필터 생성
        if (sGender) {
          aFilter.push(new Filter("gender", "EQ", sGender));
        }

        // 클래스 필터와 성별 필터 결합
        const aFilters = aFilter.concat(this._getClassFilters());

        // 테이블에 필터 적용
        oBinding.filter(aFilters);
      },

      // 클래스 필터를 가져오는 메서드 (필요시 추가로 수정 가능)
      _getClassFilters: function () {
        const sQuery = this.byId("class").getValue();
        const aClassFilter = [];

        if (sQuery) {
          aClassFilter.push(
            new Filter("class", FilterOperator.Contains, sQuery)
          );
        }

        return aClassFilter;
      },

      //다이어로그 창
      async onShowDetail(oEvent) {
        const oContext = oEvent.getSource().getBindingContext("data");
        const oRowData = oContext.getObject();

        const oDialogModel = new JSONModel(oRowData);

        if (!this.oDialog) {
          this.oDialog ??= await this.loadFragment({
            name: "project11.view.DetailDialog",
          });
        }

        this.oDialog.setModel(oDialogModel, "dialogModel");

        this.oDialog.open();
      },

      onCloseDialog() {
        this.oDialog.close();
      },

      async onShowChart() {
        this.oDialog ??= await this.loadFragment({
          name: "project11.view.GenderChart",
        });

        // 1. 현재 테이블의 필터링된 데이터 가져오기
        const oTable = this.byId("mTable");
        const oBinding = oTable.getBinding("items");
        const aFilteredContexts = oBinding.getCurrentContexts();

        const aFilteredData = aFilteredContexts.map((ctx) => ctx.getObject());

        // 2. 성별 카운트
        const genderCount = { 남성: 0, 여성: 0 };
        aFilteredData.forEach((item) => {
          if (genderCount[item.gender] !== undefined) {
            genderCount[item.gender]++;
          }
        });

        // 3. 도넛 차트용 데이터 구성
        const aChartData = [
          { category: "남성", value: genderCount["남성"] },
          { category: "여성", value: genderCount["여성"] },
        ];

        const oChartModel = new JSONModel({ data: aChartData });
        this.oDialog.setModel(oChartModel, "chart2");

        this.oDialog.open();
      },
    });
  }
);
