const poupancaHtml = require('./poupanca-html');
const cheerio = require('cheerio');
const datetime = require('node-datetime');

var $;
var divs;

const poupancaJson = function (callback) {

	poupancaHtml(function (response) {

		$  = cheerio.load(response);
		divs = cheerio.load($('entry>content').text());
		const date = datetime.create($('entry>updated').text());

		const json = {
			"title": $('entry>title').text(),
			"date-update-formatted": date.format('d/m/Y'),
		 	"rate": { "value": divs('#rate>#value').text()
		  			},
		  	"date-update": date.getTime()
		};

		return callback(json);
	});
};

module.exports = poupancaJson;