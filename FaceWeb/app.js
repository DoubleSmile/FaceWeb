var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

mongoose.connect('mongodb://127.0.0.1/WebFace');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'www/css')));
app.use('/fonts', express.static(path.join(__dirname, 'www/fonts')));
app.use('/font', express.static(path.join(__dirname, 'www/font')));
app.use('/img', express.static(path.join(__dirname, 'www/img')));
app.use('/js', express.static(path.join(__dirname, 'www/js')));
app.use('/index.html', express.static(path.join(__dirname, 'www/index.html')));
app.use('/product.html', express.static(path.join(__dirname, 'www/product.html')));
app.use('/recruit.html', express.static(path.join(__dirname, 'www/recruit.html')));
app.use('/favicon1.ico', express.static(path.join(__dirname, 'www/favicon1.ico')));
app.use('/', express.static(path.join(__dirname, 'www')));

app.use('/index', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
