var express = require('express');
var router = express.Router();

module.exports = function(app) {
	var ipca = app.controllers.ipca;
	app.get('/ipca', ipca.index);
};