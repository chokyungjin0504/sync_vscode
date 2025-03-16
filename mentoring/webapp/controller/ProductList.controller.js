sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, JSONModel, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("store.mentoring.controller.PriceList", {
        onInit() {
            //통화 단위
            const oViewModel = new JSONModel({
                currency: "KRW"
            });
            this.getView().setModel(oViewModel, "view")
        },

        //필터링
        onFilterProducts(oEvent) {
            const aFilter = [];
            const sQuery = oEvent.getParameter("query");
            if (sQuery) {
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
            }

            const oList = this.byId("productList");
            const oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        },

        //다이어로그
        async onShowStock() {
            this.oDialog ??= await this.loadFragment({
                name: "store.mentoring.view.StockDialog"
            });

            const oList = this.byId("stockList");

            const aFilter = [
                new Filter("Quantity", FilterOperator.LE, 5)
            ];

            const oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        
            this.oDialog.open();
        },

        onCloseStock() {
            this.byId("stockDialog").close();
        },

        onChkBox(oEvent) {
            console.log("CheckBox Clicked");
            var bSelected = oEvent.getParameter("selected");
            var oList = this.byId("productList");

            var aFilter = [];

            if (bSelected) {
                aFilter.push(new Filter("Status", FilterOperator.EQ, "Shipped"));
            }

            var oBinding = oList.getBinding("items");

            oBinding.filter(aFilter);

            oBinding.refresh();

        }
    })
})