var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var loginRouter = require('./src/routes/admin/login');
const novedadesRouter = require('./src/routes/admin/novedades');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Dependencias
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 's@6qv$E72s@7',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
}));

const secured =  async(req, res, next) => { 
  try{
    if(!req.session.id_usuario) {
      if(req.url != "/admin/login") 
        res.redirect('/admin/login');
      else next();
    }
    else next();
  }catch(error){ 
    console.log(error);
  }
}

app.use(secured);
app.use('/admin/login', loginRouter);
app.use('/admin/novedades', novedadesRouter);

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

module.exports = app;
