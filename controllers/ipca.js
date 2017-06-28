var ipcaJson = require('../helpers/ipca/ipca-json');

module.exports = function(app) {
	var IpcaController = {
		index: function (req, res) {
			ipcaJson(function (json) {
			    res.setHeader('Content-Type', 'application/json');
    			res.send(JSON.stringify(json));
			});
			
		}
	};
	return IpcaController;
};