/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"syncd22/exercise22_05_2/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});