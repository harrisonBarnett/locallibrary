require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index'); // route handling for home page
var usersRouter = require('./routes/users'); // route handling for users page
var catalogRouter = require('./routes/catalog')

var app = express(); // instantiate the app

//Set up mongoose database connection
var mongoose = require('mongoose');
var mongoDB = process.env.DB_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// // VIEW ENGINE SETUP
// tells express to use the __dirname/views directory to serve view templates as .hbs files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// // ADDING MIDDLEWARE IN THE REQUEST HANDLING CHAIN
app.use(logger('dev'));
app.use(express.json()); // allows parsing of body data as json objects for backend traversal/manipulation
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // tells express to use the __dirname/public/ directory to serve static files

app.use('/', indexRouter); // extends API for route handling for home page
app.use('/users', usersRouter); // extends API for route handling for users page
app.use('/catalog', catalogRouter)

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

module.exports = app; // export the application for use in /bin/www
