var http = require('http');

var contentHtml = '';

var options = {
    host: 'conteudo.bcb.gov.br',
    path: '/api/feed/pt-br/PAINEL_INDICADORES/poupanca'
}

var poupancaHtml = function (callback) {
	
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

module.exports = poupancaHtml;