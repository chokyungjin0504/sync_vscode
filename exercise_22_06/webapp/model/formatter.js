sap.ui.define(["sap/ui/core/format/DateFormat"], (DateFormat) => {
  "use strict";

  return {
    formatDate(sBirthdate) {
      const oDateFormat = DateFormat.getDateInstance({ pattern: "yyyy/MM/dd" });

      return oDateFormat.format(new Date(sBirthdate));
    },
    isFutureMonth(oDate) {
      if (!oDate) {
        return "";
      }

      //1. oDate를 string으로 변환하고 -를 기준으로 split을 함
      let tempstring = oDate.toString().split("-");

      //2.2번째 요소 새 변수에 할당 - 형변환 int - parseint
      let birthMonth = parseInt(tempstring[1], 10);

      let iCurrentMonth = new Date().getMonth() + 1;

      if (birthMonth > iCurrentMonth) {
        return "Favorite";
      } else return "Flagged";
    },
  };
});
