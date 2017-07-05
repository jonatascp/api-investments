'use strict';

const express = require('express');
const load = require('express-load');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');

const app = express();

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(cookieParser('api-investments'));
app.use(session());
app.use(methodOverride());

app.use(express.static(__dirname + '/public'));


load('models').then('controllers').then('routes').into(app);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
	console.log('...API Investments on %s...', PORT);
});