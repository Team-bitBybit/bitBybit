const  router = require("express").Router();

const {home, User} = require("../controllers");

const uc = new User();

router.get('/', home)
router.get('/accounts/dashboard', uc.dashboard)
router.all("/accounts/register", uc.register);
router.all("/accounts/login", uc.login);

module.exports = router;
