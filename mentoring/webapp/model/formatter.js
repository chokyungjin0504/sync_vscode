sap.ui.define([], () => {
    "use strict";

    return {
        //배송현황
        statusText(sStatus) {
            const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            switch (sStatus) {
                case "Shipped":
                    return oResourceBundle.getText("productShipped");
                case "Shipping":
                    return oResourceBundle.getText("productShipping");
                case "Ordered":
                    return oResourceBundle.getText("productOrdered");
            }
        },

        //색상
        statusColor(sStatus) {
            switch (sStatus) {
                case "Shipped":
                    return "Success";
                case "Shipping":
                    return "Error";
                case "Ordered":
                    return "Error";
                default:
                    return "None";
            }
        },

        statusDate(sStatus, sShippedDate) {
            if (sStatus === "Shipped") {
                return "배송일:" + sShippedDate;
            }
            else
                return "";
        },

        formatProductTitle(orderID, productName) {
            return "(" + orderID + ") : " + productName;
        },

        formatProductNumber(Quantity) {
            return "재고: " + Quantity;
        }

    }

})