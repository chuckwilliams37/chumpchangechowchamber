var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
var sass = require('node-sass');
var sassMiddleware = require('node-sass-middleware');

app.use(
     sassMiddleware({
         src: __dirname + '/sass', //where the sass files are 
         dest: __dirname + '/public/stylesheets', //where css should go
         prefix:  '/stylesheets',
         debug: true // obvious
     })
 );

app.use(express.static( path.join( __dirname, 'public' ) ) );
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/javascripts',  express.static(__dirname + '/javascripts'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
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







// The static middleware must come after the sass middleware
//app.use(express.static( path.join( __dirname, 'public' ) ) );
  
app.listen(process.env.PORT);

module.exports = app;


