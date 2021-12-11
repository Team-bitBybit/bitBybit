require('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('express-hbs')

const {indexRouter, usersRouter} = require('./routes');

const sequelize = require('./sequelize');

var app = express();

app.engine('hbs', hbs.express4({
    partialsDir: path.join(__dirname, 'views', 'partials'),
    layoutsDir: path.join( __dirname, 'views', 'layouts'),
    defaultLayout: path.join( __dirname, 'views', 'layouts', 'base.hbs'),
}))

app.set('view engine', 'hbs')
app.set('views',path.join(__dirname, 'views'))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter)
app.use('/users', usersRouter);


module.exports = app;
