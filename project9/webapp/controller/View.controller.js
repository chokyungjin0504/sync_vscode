sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/json/JSONModel",
  ],
  (Controller, ODataModel, JSONModel) => {
    "use strict";

    return Controller.extend("project9.controller.View", {
      onInit() {
        const oDataModel = new ODataModel("/v2/northwind/northwind.svc/");

        oDataModel.read("/Products", {
          success: function (oData) {
            const aSortedData = oData.results.sort(
              (a, b) => b.UnitsInStock - a.UnitsInStock
            );

            const aTop5Data = aSortedData.slice(0, 5);

            const oChartModel = new JSONModel({ data: aTop5Data });
            this.getView().setModel(oChartModel, "chart");
          }.bind(this),
        });
      },
    });
  }
);
