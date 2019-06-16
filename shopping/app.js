var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var checkoutRouter = require('./routes/checkout');
var cartRouter = require('./routes/cart')
var confirmationRouter = require('./routes/confirmation')
var accountRouter = require('./routes/account')
var contactRouter = require('./routes/contact');
var forgotpasswordRouter = require('./routes/forgot-password');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var trackingRouter = require('./routes/tracking');
var productRouter = require('./routes/product');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/checkout', checkoutRouter);
app.use('/cart', cartRouter);
app.use('/confirmation', confirmationRouter);
app.use('/account', accountRouter);
app.use('/contact', contactRouter);
app.use('/forgot-password', forgotpasswordRouter);
app.use('/login', loginRouter);
app.use('/registration', registerRouter);
app.use('/tracking', trackingRouter);
app.use('/product', productRouter);


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

