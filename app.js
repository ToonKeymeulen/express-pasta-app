var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//import the route modules 
var indexRouter = require('./routes/index');
var orderRouter = require('./routes/order');
var pastainfoRouter = require('./routes/pastainfo');
var aboutRouter = require('./routes/about');
//var catalogRouter = require('./routes/catalog');  //Import routes for "catalog" area of site
//create app
var app = express();

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://pasta123:pasta123@pastapacket.pz52b.mongodb.net/pasta_app?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup, first select the correct folder for the views
app.set('views', path.join(__dirname, 'views'));
//then set the view engine to pug
app.set('view engine', 'pug');


//add middleware libraries into request handling chain
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//static to serve all sttic files in /public directory, zijnde images stylesheets en javascripts
app.use(express.static(path.join(__dirname, 'public')));

//the earlier imported code from index.js and users.js will now be added to the request handling chain
app.use('/', indexRouter);
app.use('/order', orderRouter);
app.use('/about', aboutRouter);
app.use('/pastainfo', pastainfoRouter);
//app.use('/catalog' ,catalogRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//exports the app object
module.exports = app;
