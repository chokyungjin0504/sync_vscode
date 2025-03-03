sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], (Controller, MessageToast) => {
   // define에서 controller, messagetoast 순서로 받았으니
   // 인자도 순서대로 받는다
   "use strict";

   return Controller.extend("ui5.walkthrough.controller.App", {
      onShowHello() {
         MessageToast.show("Hello World");
         //모듈 정의를 이미했으니 그 이름을 통해서 함수를 호출한다
      }
   });
});