/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"syncd22/exercised22_05/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});