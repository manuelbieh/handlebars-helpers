'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var register = exports.register = function register(Handlebars) {
	Handlebars.registerHelper('isObject', function (value) {
		return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null;
	});
};