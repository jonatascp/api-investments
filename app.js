var express = require('express');
var load = require('express-load');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(cookieParser('api-investments'));
app.use(session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride());

app.use(express.static(__dirname + '/public'));

// Ao tentar configurar tratamento de erro, a tela sempre é exibida para qualquer requisicao.
// app.use(error.notFound);
// app.use(error.serverError);

load('models').then('controllers').then('routes').into(app);



app.listen(3000, function () {
	console.log('...API Investments...');
});