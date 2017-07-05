var parseFloatAPI = function (value) {
	value = value.replace('R$','').replace('.','').replace(',','.');
	return parseFloat(value);
};

module.exports = parseFloatAPI;