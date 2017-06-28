var tesouroDiretoHtml = require('./tesouro-direto-html');
var cheerio = require('cheerio');

var $;
var securities;

var tesouroDiretoJson = function (callback) {

	tesouroDiretoHtml(function (response) {

		$  = cheerio.load(response);

		var updateDate;
		$('.portlet-body>b').each(function(i, elem) {
			updateDate = $(this).html();
		});

		var arrayInvestmentSecurities = [];
		var arraySecuritiesRedeem = [];
		var initJson = true;
		var numberAttribute = 0;

		$('.portlet-body>table.tabelaPrecoseTaxas .camposTesouroDireto > td').each(function(i, elem) {
			if (initJson) { 
				initJson = false;
				numberAttribute = 0;
				securities = {
					"title": "",
					"dueDate": "",
					"rateReturn": "",
					"minimumValue": "",
					"unitPrice": ""
				};
			}
			
			if (numberAttribute == 0) {
				securities.title = $(this).html();
			}
			if (numberAttribute == 1) {
				securities.dueDate = $(this).html();
			}
			if (numberAttribute == 2) {
				securities.rateReturn = $(this).html();
			}
			if (numberAttribute == 3) {
				securities.minimumValue = $(this).html();
			}
			if (numberAttribute == 4) {
				securities.unitPrice = $(this).html();
			}

			numberAttribute++;

			if ((i+1) % 5 == 0) { 
				initJson = true;
				arrayInvestmentSecurities.push(securities);
			}
		});

		initJson = true;
		$('.portlet-body>div.sanfonado>table.tabelaPrecoseTaxas .camposTesouroDireto > td').each(function(i, elem) {
			if (initJson) { 
				initJson = false;
				numberAttribute = 0;
				securities = {
					"title": "",
					"dueDate": "",
					"rateReturn": "",
					"unitPrice": ""
				};
			}
			
			if (numberAttribute == 0) {
				securities.title = $(this).html();
			}
			if (numberAttribute == 1) {
				securities.dueDate = $(this).html();
			}
			if (numberAttribute == 2) {
				securities.rateReturn = $(this).html();
			}
			if (numberAttribute == 3) {
				securities.unitPrice = $(this).html();
			}
			
			numberAttribute++;

			if ((i+1) % 4 == 0) { 
				initJson = true;
				arraySecuritiesRedeem.push(securities);
			}
		});
		
		var json = {
			"date": updateDate,	
			"investmentSecurities": arrayInvestmentSecurities,
			"securitiesRedeem": arraySecuritiesRedeem
		};

		return callback(json);
	});
};

module.exports = tesouroDiretoJson;