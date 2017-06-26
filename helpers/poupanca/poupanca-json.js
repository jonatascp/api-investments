var poupancaHtml = require('./poupanca-html');
var cheerio = require('cheerio');

var $;
var divs;

var poupancaJson = function (callback) {

	poupancaHtml(function (response) {

		$  = cheerio.load(response);
		divs = cheerio.load($('entry>content').text());

		var json = {
		  "date-update": $('entry>updated').text(),
		  "title": $('entry>title').text(),
		  "rate": { "value": divs('#rate>#value').text()
		  		}		
		};

		return callback(json);
	});
};

module.exports = poupancaJson;