module.exports = function(app) {
	var HomeController = {
		index: function (req, res) {
			res.render('home/index');
		}
	};
	return HomeController;
};