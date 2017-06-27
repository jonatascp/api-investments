var selicJson = require('../helpers/selic/selic-json');

module.exports = function(app) {
	var SelicController = {
		index: function (req, res) {
			selicJson(function (json) {
			    res.setHeader('Content-Type', 'application/json');
    			res.send(JSON.stringify(json));
			});
			
		}
	};
	return SelicController;
};