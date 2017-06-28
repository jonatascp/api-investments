var tesouroDiretoJson = require('../helpers/tesouro-direto/tesouro-direto-json');

module.exports = function(app) {
	var TesouroDiretoController = {
		index: function (req, res) {
			tesouroDiretoJson(function (json) {
			    res.setHeader('Content-Type', 'application/json');
    			res.send(JSON.stringify(json));
			});
			
		}
	};
	return TesouroDiretoController;
};