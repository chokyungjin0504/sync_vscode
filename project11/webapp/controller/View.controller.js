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
      },

      //반반
      onFilterClass(oEvent) {
        const aFilter = [];
        const sQuery = oEvent.getParameter("query");
        if (sQuery) {
          aFilter.push(new Filter("class", FilterOperator.Contains, sQuery));
        }

        const oTable = this.byId("mTable");
        const oBinding = oTable.getBinding("items");
        oBinding.filter(aFilter);
      },

      //성별
      onSelectGender(oEvent) {
        var sGender = oEvent.getParameter("selectedItem").getKey();
        var oTable = this.byId("oTable");
        var oBinding = oTable.getBinding("items");

        var aFilters = [];

        if (sGender) {
          aFilters.push(new sap.ui.model.Filter("gender", "EQ", sGender));
        }

        oBinding.filter(aFilters);
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

      onShowChart() {},
    });
  }
);

// sap.ui.define(
//   [
//     "sap/ui/core/mvc/Controller",
//     "sap/ui/model/json/JSONModel",
//     "sap/ui/model/Filter",
//     "sap/ui/model/FilterOperator",
//   ],
//   (Controller, JSONModel, Filter, FilterOperator) => {
//     "use strict";

//     return Controller.extend("project11.controller.View", {
//       onInit() {
//         const oModel = new JSONModel();
//         this.getView().setModel(oModel, "view");
//         this.aFilters = []; // 필터 조건을 저장할 배열
//       },

//       // 반반 (CLASS 필터)
//       onFilterClass(oEvent) {
//         const sQuery = oEvent.getParameter("query");
//         if (sQuery) {
//           // 클래스 필터 추가
//           this.aFilters = this.aFilters.filter(
//             (filter) => filter.sPath !== "class"
//           ); // 기존 class 필터 제거
//           this.aFilters.push(
//             new Filter("class", FilterOperator.Contains, sQuery)
//           );
//         }

//         this.applyFilters();
//       },

//       // 성별 (GENDER 필터)
//       onSelectGender(oEvent) {
//         const sGender = oEvent.getParameter("selectedItem").getKey();
//         if (sGender) {
//           // 성별 필터 추가
//           this.aFilters = this.aFilters.filter(
//             (filter) => filter.sPath !== "gender"
//           ); // 기존 gender 필터 제거
//           this.aFilters.push(new Filter("gender", FilterOperator.EQ, sGender));
//         }

//         this.applyFilters();
//       },

//       // 필터 적용
//       applyFilters() {
//         const oTable = this.byId("mTable");
//         const oBinding = oTable.getBinding("items");

//         // 모든 필터 적용
//         oBinding.filter(this.aFilters);
//       },

//       // 다이어로그 창
//       async onShowDetail(oEvent) {
//         const oContext = oEvent.getSource().getBindingContext("data");
//         const oRowData = oContext.getObject();

//         const oDialogModel = new JSONModel(oRowData);

//         if (!this.oDialog) {
//           this.oDialog ??= await this.loadFragment({
//             name: "project11.view.DetailDialog",
//           });
//         }

//         this.oDialog.setModel(oDialogModel, "dialogModel");

//         this.oDialog.open();
//       },

//       onCloseDialog: function () {
//         this.oDialog.close();
//       },
//     });
//   }
// );
