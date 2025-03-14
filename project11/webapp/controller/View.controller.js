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

          //성별
      onSelectGender(oEvent) {
        var sGender = oEvent.getParameter("selectedItem").getKey(); // '', '남자', '여자'
        var oTable2 = this.byId("oTable");
        var oBinding2 = oTable2.getBinding("items");

        var aFilters = [];

        if (sGender) {
          aFilters.push(new sap.ui.model.Filter("gender", "EQ", sGender));
        }

        oBinding2.filter(aFilters); // 전체일 경우: 빈 필터 적용됨
      }
      },
    });
  }
);
