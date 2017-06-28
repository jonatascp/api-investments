var express = require('express');
var router = express.Router();

module.exports = function(app) {
	var tesouroDireto = app.controllers.tesouroDireto;
	app.get('/titulos-tesouro-direto', tesouroDireto.index);
};