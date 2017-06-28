var ipcaHtml = require('./ipca-html');
var cheerio = require('cheerio');

var $;
var divs;

var ipcaJson = function (callback) {

	ipcaHtml(function (response) {

		$  = cheerio.load(response);
		divs = cheerio.load($('entry>content').text());

		var json = {
		  "date-update": $('entry>updated').text(),
		  "title": $('entry>title').text(),
		  "rate": { "value": divs('#rate>#value')[0].children[0].data,
		  			"obs": divs('#rate>#obs')[0].children[0].data
		  		},
		  "daily": { "value": divs('#rate>#value')[1].children[0].data,
		  			"obs": divs('#rate>#obs')[1].children[0].data
		  		}		
		};

		return callback(json);
	});
};

module.exports = ipcaJson;