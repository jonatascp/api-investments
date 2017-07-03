var express = require('express');
var load = require('express-load');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');

var app = express();

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(cookieParser('api-investments'));
app.use(session());
app.use(methodOverride());

app.use(express.static(__dirname + '/public'));


load('models').then('controllers').then('routes').into(app);



app.listen(3000, function () {
	console.log('...API Investments...');
});