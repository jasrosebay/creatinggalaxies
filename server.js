var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var port = 3000;

var routes = require('./routes/index'); // determine the route
// var user = require('./routes/user'); //requires user module from user.js

var app = express();

// view engine setup
app.set('views', [path.join(__dirname, 'views'),
                      path.join(__dirname, 'views/pages/'), 
                      path.join(__dirname, 'views/partials/')]);

app.set('public', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', routes);
app.use('/about', routes);
app.use('/portfolio', routes);
app.use('/blog', routes);
app.use('/contact', routes);



// app.use('/user', user);

app.listen(port, function() {
  console.log('Listening in on port: ' + port);
  console.log('http://localhost:' + port + "/");
});

module.exports = app;