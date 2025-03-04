sap.ui.define(["sap/ui/core/ComponentContainer"], (ComponentContainer) => {
  "use strict";

  new ComponentContainer({
    name: "ui5.walkthrough",
    settings: {
      id: "walkthrough",
    },
    async: true,
  }).placeAt("content");
});

// //SAP UI5 애플리케이션에서 XML View를 로드하고 화면에 표시하는 역할

// sap.ui.define([
// 	"sap/ui/core/mvc/XMLView" //xml view를 control하는 모델이구나
// ], (XMLView) => {
// 	"use strict";

// 	XMLView.create({
// 		viewName: "ui5.walkthrough.view.App" //xml 뷰 이름
// 	}).then((oView) => oView.placeAt("content")); //생성된 뷰를 id가 content인 요소에 배치
// });

//초기화

// sap.ui.define(["sap/m/Text"], (Text) => { //화살표 함수표현
// 	"use strict"; //엄격하게 문법 관리하겠다
// 	alert("UI5 is ready");

//    //생성자 메소드로부터 객체 생성
//     new Text({
// 		text: "Hello World"
// 	}).placeAt("content"); //content라는 body에 hello world로 대체시켜줘라

// });
