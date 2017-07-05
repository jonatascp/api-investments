const ipcaHtml = require('./ipca-html');
const cheerio = require('cheerio');
const datetime = require('node-datetime');

var $;
var divs;

const ipcaJson = function(callback) {

    ipcaHtml(function(response) {

        $ = cheerio.load(response);
        divs = cheerio.load($('entry>content').text());
        const date = datetime.create($('entry>updated').text());

        const json = {
            "title": $('entry>title').text(),
            "date-update-formatted": date.format('d/m/Y'),
            "rate": {
                "value": divs('#rate>#value')[0].children[0].data,
                "obs": divs('#rate>#obs')[0].children[0].data
            },
            "daily": {
                "value": divs('#rate>#value')[1].children[0].data,
                "obs": divs('#rate>#obs')[1].children[0].data
            },
            "date-update": date.getTime()
        };

        return callback(json);
    });
};

module.exports = ipcaJson;
