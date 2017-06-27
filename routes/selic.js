var express = require('express');
var router = express.Router();

module.exports = function(app) {
	var selic = app.controllers.selic;
	app.get('/selic', selic.index);
};