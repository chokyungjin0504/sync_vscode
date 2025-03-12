sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/JSONModel",
  ],
  (Controller, ODataModel, JSONModel) => {
    "use strict";

    return Controller.extend("project9.controller.View", {
      onInit() {
        var oDataModel = ODataModel("sap/opu/odata/sap/ZORDER_D22_SRV");
        this.getView().setModel(oDataModel, "myModel");

        // const oDataModel = {
        //   ProductID,
        //   UnitsInStock,
        // };

        // oDataModel.read("/ZORDER_D22Set", {
        //   success: function (oData) {
        //     var oChartModel = new JSONModel({ data: oData.results });

        //     this.getView().setModel(oChartModel, "chart");
        //   }.bind(this),

        //   error: function (oError) {
        //     console.error("ODataModel 읽기 실패:", oError);
        //   },
        // });
      },
    });
  }
);
