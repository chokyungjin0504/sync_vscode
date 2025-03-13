sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("project10.controller.Detail", {
    onInit() {
      this.oRouter = this.getOwnerComponent().getRouter();
    },
    onGoBack() {
      //   this.oRouter.navTo("RouteMain", {}, true);

      this.getOwnerComponent()
        .getRouter()
        .navTo("RouteMain", {
          "?query": {
            key1: "ToMain",
            key2: 123,
          },
        });
    },
  });
});
