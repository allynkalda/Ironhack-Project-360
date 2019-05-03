const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

// Session and Passport modules
const session = require("express-session");
const flash = require("connect-flash");
//const passport = require("./config/passport-config");  // passport module setup and initial load
//const passportStrategySetup = require('./config/passport-local-strategy');
//const config = require('./config/config');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
//const passportRouter = require("./routes/passportRouter");

mongoose
  .connect('mongodb://localhost/360-project', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/*
app.use(session({
  secret: config.SESSION_KEY,
  resave: false,
  saveUninitialized: false
}));

// PASSPORT LINES MUST BE BELOW SESSION

//	Auth Setup - how is the user being authenticated during login
passport.use(passportStrategySetup);

// Creates Passport's methods and properties on `req` for use in out routes
app.use(passport.initialize());

// Invokes / Sets Passport to manage user session
app.use(passport.session());

// allow our routes to use FLASH MESSAGES – feedback messages before redirects
// (flash messages need sessions to work)
app.use(flash());
*/
// Router
app.use('/', indexRouter);
//app.use('/', passportRouter);
app.use('/users', usersRouter);

// Error handling
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;