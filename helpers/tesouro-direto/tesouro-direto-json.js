var tesouroDiretoHtml = require('./tesouro-direto-html');
var cheerio = require('cheerio');

var $;
var titulo;

var tesouroDiretoJson = function (callback) {

	tesouroDiretoHtml(function (response) {

		$  = cheerio.load(response);

		var dataAtualizacao;
		$('.portlet-body>b').each(function(i, elem) {
			dataAtualizacao = $(this).html();
		});

		var arrayTitulosInvestir = [];
		var arrayTitulosResgatar = [];
		var initJson = true;
		var numberAttribute = 0;

		$('.portlet-body>table.tabelaPrecoseTaxas .camposTesouroDireto > td').each(function(i, elem) {
			if (initJson) { 
				initJson = false;
				numberAttribute = 0;
				titulo = {
					"titulo": "",
					"vencimento": "",
					"taxaRendimento": "",
					"valorMinimo": "",
					"precoUnitario": ""
				};
			}
			
			if (numberAttribute == 0) {
				titulo.titulo = $(this).html();
			}
			if (numberAttribute == 1) {
				titulo.vencimento = $(this).html();
			}
			if (numberAttribute == 2) {
				titulo.taxaRendimento = $(this).html();
			}
			if (numberAttribute == 3) {
				titulo.valorMinimo = $(this).html();
			}
			if (numberAttribute == 4) {
				titulo.precoUnitario = $(this).html();
			}

			numberAttribute++;

			if ((i+1) % 5 == 0) { 
				initJson = true;
				arrayTitulosInvestir.push(titulo);
			}
		});

		initJson = true;
		$('.portlet-body>div.sanfonado>table.tabelaPrecoseTaxas .camposTesouroDireto > td').each(function(i, elem) {
			if (initJson) { 
				initJson = false;
				numberAttribute = 0;
				titulo = {
					"titulo": "",
					"vencimento": "",
					"taxaRendimento": "",
					"precoUnitario": ""
				};
			}
			
			if (numberAttribute == 0) {
				titulo.titulo = $(this).html();
			}
			if (numberAttribute == 1) {
				titulo.vencimento = $(this).html();
			}
			if (numberAttribute == 2) {
				titulo.taxaRendimento = $(this).html();
			}
			if (numberAttribute == 3) {
				titulo.precoUnitario = $(this).html();
			}
			
			numberAttribute++;

			if ((i+1) % 4 == 0) { 
				initJson = true;
				arrayTitulosResgatar.push(titulo);
			}
		});
		
		var json = {
			"data": dataAtualizacao,	
			"titulosInvestir": arrayTitulosInvestir,
			"titulosResgatar": arrayTitulosResgatar
		};

		return callback(json);
	});
};

module.exports = tesouroDiretoJson;