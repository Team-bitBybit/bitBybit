require('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('express-hbs')
var session = require('express-session')

const router = require('./routes');
const passport = require('./config/passport')
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
app.use(session({
    secret: 'this-is-a-safe-secret',
    resave: false,
    cookie: { maxAge: 1000 * 60 *60 *24},
    saveUninitialized: true,
}))
app.use(cookieParser());
app.use(passport.initialize())
app.use(passport.session())
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    if (req.user) {
        res.locals.user = req.user.toJSON()
    }
    next()
})
app.use('/', router)

module.exports = app;
