sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sync/d22/exercise22052/model/models",
  ],
  (UIComponent, JSONModel, models) => {
    "use strict";

    return UIComponent.extend("sync.d22.exercise22052.Component", {
      metadata: {
        manifest: "json",
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
      },

      init() {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        // set my JSON Model
        const oModel = new JSONModel({ input: "" });
        this.setModel(oModel); //oModel에 데이터 바인딩 가능

        // set the device model
        this.setModel(models.createDeviceModel(), "device");

        // enable routing
        this.getRouter().initialize();
      },
    });
  }
);
