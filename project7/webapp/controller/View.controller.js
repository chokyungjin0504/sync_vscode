sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel", //oDataModel 모듈 추가
  ],
  (Controller, ODataModel) => {
    "use strict";

    return Controller.extend("project7.controller.View", {
      onInit() {
        //oData 모델 생성 및 설정
        var oModel = new ODataModel("/sap/opu/odata/sap/ZCARR_D22_SRV/");
        //View에 모델 설정
        this.getView().setModel(oModel, "myModel");
      },

      //버튼 클릭 시 사용할 모델 정의
      onCreate() {},
    });
  }
);
