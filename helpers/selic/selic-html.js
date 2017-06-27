var http = require('http');

var options = {
    host: 'conteudo.bcb.gov.br',
    path: '/api/feed/pt-br/PAINEL_INDICADORES/juros'
}

var selicHtml = function (callback) {
	
	var contentHtml = '';
		
	var request = http.request(options, function (res) {
	    res.on('data', function (data) {
	    	contentHtml += data;
	    });
	    res.on('end', function () {
	    	return callback(contentHtml);
	    });
	});
	request.on('error', function (e) {
	    throw e;
	});

	request.end();

};

module.exports = selicHtml;