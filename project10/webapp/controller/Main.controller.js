sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("project10.controller.Main", {
    onInit() {
      this.oRouter = this.getOwnerComponent().getRouter(); // 컨트롤러에 유효한 객체
    },

    onGoDetail() {
      //  input 필드에 들어오는 값 찾기 -> 매개변수로 전달하기
      let sValue = this.getView().byId("idInput").getValue();

      this.oRouter.navTo(
        "RouteDetail",
        {
          key1: sValue,
          //   key1: "abc",
          key2: 123,
        },
        true
      );
    },
  });
});
