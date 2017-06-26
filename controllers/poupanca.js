var poupancaJson = require('../helpers/poupanca/poupanca-json');

module.exports = function(app) {
	var PoupancaController = {
		index: function (req, res) {
			poupancaJson(function (json) {
			    res.setHeader('Content-Type', 'application/json');
    			res.send(JSON.stringify(json));
			});
			
		}
	};
	return PoupancaController;
};