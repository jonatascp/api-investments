var poupancaJson = require('../helpers/poupanca/poupanca-json');
//var poupanca = require('../models/Poupanca');

module.exports = function(app) {
	var PoupancaController = {
		index: function (req, res) {
			poupancaJson(function (json) {
			    res.setHeader('Content-Type', 'application/json');
    			res.send(JSON.stringify(json));
			});
			
		}, 
		save : function (req, res) {
			var poupanca = new Poupanca();
			poupanca.title = 'Teste title';
			res.send('Router SAVER: ' + poupanca.title);
		}
	};
	return PoupancaController;
};