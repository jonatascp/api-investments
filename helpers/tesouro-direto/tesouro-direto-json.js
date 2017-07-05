const tesouroDiretoHtml = require('./tesouro-direto-html');
const cheerio = require('cheerio');
const datetime = require('node-datetime');

var $;
var securities;

const tesouroDiretoJson = function (callback) {

	tesouroDiretoHtml(function (response) {

		$  = cheerio.load(response);

		var dateUpdate;
		$('.portlet-body>b').each(function(i, elem) {
			dateUpdate = $(this).html();
		});

		const arrayInvestmentSecurities = [];
		const arraySecuritiesRedeem = [];
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
			"date-formatted": dateUpdate,
			"investmentSecurities": arrayInvestmentSecurities,
			"securitiesRedeem": arraySecuritiesRedeem
		};

		return callback(json);
	});
};

module.exports = tesouroDiretoJson;