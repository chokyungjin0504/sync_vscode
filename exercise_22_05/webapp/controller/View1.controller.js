sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("sync.d22.exercised2205.controller.View1", {
    onInit() {},
    onPress: function () {
      var sMsg = this.getView().getModel().getProperty("/input");
      if (!sMsg) sMsg = "메시지를 입력바랍니다.";
      MessageToast.show(sMsg);
    },
  });
});
