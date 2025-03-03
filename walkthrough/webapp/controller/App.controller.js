sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
   //  "sap/ui/model/json/JSONModel",
   //  "sap/ui/model/resource/ResourceModel",
  ],
  (Controller, MessageToast) => {
    // define에서 controller, messagetoast 순서로 받았으니
    // 인자도 순서대로 받는다
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.App", {
      // onInit() {
      //   // 1. 기본 JSON set data model on view {key: value, key: value}
      //   const oData = {
      //     recipient: {
      //       name: "World",
      //     },
      //   };
      //   const oModel = new JSONModel(oData);
      //   this.getView().setModel(oModel);

      //   //2. Resource Model (i18n)
      //   //resource bundle에서 파일을 가져온다
      //   const i18nModel = new ResourceModel({
      //     bundleName: "ui5.walkthrough.i18n.i18n",
      //   }); //리소스 모델의 대상 데이터에 경로 안내 (파일 로드)
      //   this.getView().setModel(i18nModel, "i18n"); //모델 이름
      // },

      onShowHello() {
        //getModel() -> jason 모델을 의미(default니까) recipient에 있는 name을 가져온다
        //sRecipient에 world가 들어온다(매개변수)

        // 기본 json 모델에서 /recipient/name(해당 경로)에 있는 값을 가져온다
        const oBundle = this.getView().getModel("i18n").getResourceBundle();
        const sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        // i18n 모델에서 선택된 리소스 번들의 값과 기본 모델의 name 값 조합
        const sMsg = oBundle.getText("helloMsg", [sRecipient]);

        MessageToast.show(sMsg); //리소스 모델에 바인딩하여 표현
        //모듈 정의를 이미했으니 그 이름을 통해서 함수를 호출한다
      },
    });
  }
);
