sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  (Controller, ODataModel, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("project7.controller.View", {
      onInit() {
        //oData 모델 생성 및 설정
        var oModel = new ODataModel("/sap/opu/odata/sap/ZCARR_D22_SRV/");
        //View에 모델 설정
        this.getView().setModel(oModel, "myModel");
      },

      //생성
      onCreate() {
        const oView = this.getView();
        const oModel = oView.getModel("myModel");

        const fieldA = oView.byId("input-a").getValue();
        const fieldB = oView.byId("input-b").getValue();
        const fieldC = oView.byId("input-c").getValue();
        const fieldD = oView.byId("input-d").getValue();

        const oData = {
          Carrid: fieldA,
          Carrname: fieldB,
          Currcode: fieldC,
          Url: fieldD,
        };

        oModel.create("/zcarr_d22Set", oData, {
          success: function () {
            MessageToast.show("항공사 데이터가 성공적으로 생성되었습니다.");

            oView.byId("input-a").setValue("");
            oView.byId("input-b").setValue("");
            oView.byId("input-c").setValue("");
            oView.byId("input-d").setValue("");

            oModel.refresh(true);
            oView.refresh(true);
          },
          error: function () {
            MessageToast.show("데이터 생성 오류");
          },
        });
      },

      //삭제
      onDelete() {
        const oTable = this.getView().byId("myTable");
        const oSelectedItem = oTable.getSelectedItem();

        if (!oSelectedItem) {
          MessageToast.show("삭제할 항목을 선택해주세요.");
          return;
        }

        const oContext = oSelectedItem.getBindingContext("myModel");
        const sPath = oContext.getPath();

        const oModel = this.getView().getModel("myModel");

        oModel.remove(sPath, {
          success: function () {
            MessageToast.show("데이터가 성공적으로 삭제되었습니다.");
            oTable.removeSelections();
          },
          error: function () {
            MessageToast.show("데이터 삭제에 실패했습니다.");
          },
        });
      },

      //수정
      async onUpdate() {
        const oTable = this.getView().byId("myTable");
        const oSelectedItem = oTable.getSelectedItem();

        if (!oSelectedItem) {
          MessageToast.show("변경할 항목을 선택해주세요.");
          return;
        }

        const oContext = oSelectedItem.getBindingContext("myModel");
        const oData = oContext.getObject();

        const oModel = new JSONModel(oData);

        this.oDialog ??= await this.loadFragment({
          name: "project7.view.UpdateDialog",
        });

        this.oDialog.setModel(oModel, "dialogModel");

        this.oDialog.open();
      },

      onCloseDialog() {
        this.byId("updateDialog").close();
      },

      //update
      onUpdateDialog() {
        const oDialog = this.oDialog;

        const oUpdatedData = oDialog.getModel("dialogModel").getData();

        const oTable = this.getView().byId("myTable");
        const oSelectedItem = oTable.getSelectedItem();
        const oContext = oSelectedItem.getBindingContext("myModel");
        const sPath = oContext.getPath();

        const oMainModel = this.getView().getModel("myModel");
        // console.log(sPath);
        // console.log(oUpdatedData);

        oMainModel.update(sPath, oUpdatedData, {
          success: () => {
            MessageToast.show("데이터가 성공적으로 수정되었습니다.");
            oMainModel.refresh(true);
          },
          error: () => {
            MessageToast.show("데이터 수정 중 오류가 발생했습니다.");
          },
        });
        this.oDialog.close();
      },
    });
  }
);
