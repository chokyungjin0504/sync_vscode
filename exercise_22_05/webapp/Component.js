sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sync/d22/exercised2205/model/models",
  ],
  (UIComponent, JSONModel, models) => {
    "use strict";

    return UIComponent.extend("sync.d22.exercised2205.Component", {
      metadata: {
        manifest: "json",
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
      },

      init() {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        // set my JSON Model
        const oModel = new JSONModel({ input: "" });
        this.setModel(oModel);

        // set i18n model
        const i18nModel = new ResourceModel({
          bundleName: "ui5.exercise_22_05.i18n.i18n",
        });
        this.setModel(i18nModel, "i18n");

        // set the device model
        this.setModel(models.createDeviceModel(), "device");

        // enable routing
        this.getRouter().initialize();
      },
    });
  }
);
