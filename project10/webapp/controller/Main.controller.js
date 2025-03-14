sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("project10.controller.Main", {
      onInit() {
        this.oRouter = this.getOwnerComponent().getRouter();
        this.oRouter
          .getRoute("RouteMain")
          .attachPatternMatched(this._onPatternMatched, this);
      },

      onGoDetail() {
        const sValue = this.getView().byId("idInput").getValue();

        const oTable = this.getView().byId("mTable");
        const oSelectedItem = oTable.getSelectedItem();

        if (!oSelectedItem) {
          MessageToast.show("학생을 선택해주세요.");
          return;
        }

        const oContext = oSelectedItem.getBindingContext("student");
        const oData = oContext.getObject();

        const oModel = new JSONModel(oData);
        this.getView().setModel(oModel, "selectedStudent");

        // 라우팅 (매개변수로 sValue 사용)
        this.oRouter.navTo(
          "RouteDetail",
          {
            key1: oData.no,
            key2: oData.name,
            key3: oData.gender,
            key4: oData.birthdate,
          },
          true
        );
      },
    });
  }
);
