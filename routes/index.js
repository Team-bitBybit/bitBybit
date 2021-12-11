const router = require("express").Router();

async function home(req, res) {
  return res.render('index.html', {})
}

router.get('/', home)

module.exports = {
  usersRouter: require('./users'),
  indexRouter: router,
}
