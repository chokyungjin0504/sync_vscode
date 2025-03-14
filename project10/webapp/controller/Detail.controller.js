sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("project10.controller.Detail", {
      onInit() {
        this.oRouter = this.getOwnerComponent().getRouter();
        this.oRouter
          .getRoute("RouteDetail")
          .attachPatternMatched(this._onPatternMatched, this);
      },
      _onPatternMatched(oEvent) {
        //1. URL 에서 전달된 파라미터 가져오기.
        // var sId = oEvent.getParameter("arguments").key1; //키 지정
        var oArgu = oEvent.getParameters().arguments; //배열

        //2. 새로운 JSON 모델 생성하여 ID 값을 저장
        // var oModel = new JSONModel({ key1: sId });
        var oModel = new JSONModel(oArgu);

        //3. 뷰에 "detailModel"로 모델 설정
        this.getView().setModel(oModel, "mainModel");
      },

      onGoBack() {
        this.oRouter.navTo("RouteMain");
      },
    });
  }
);
