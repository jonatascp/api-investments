var express = require('express');
var router = express.Router();

module.exports = function(app) {
	var poupanca = app.controllers.poupanca;
	app.get('/poupanca', poupanca.index);
};