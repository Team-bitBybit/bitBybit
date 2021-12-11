const router = require("express").Router();
const { home } = require('../controllers/home')

router.get('/', home)

module.exports = {
  usersRouter: require('./users'),
  indexRouter: router,
}
