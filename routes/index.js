const router = require("express").Router();
const passport = require("../config/passport");
const { home, User, payment } = require("../controllers");
const { mustAuth } = require('../middleware/auth')

const uc = new User();

router.get("/", home);
router.all("/accounts/dashboard", mustAuth, uc.dashboard);
router.all("/accounts/register", uc.register);
router.get("/accounts/login", uc.login);
router.post(
  "/accounts/login",
  passport.authenticate("local", {
    failureRedirect: "/accounts/login",
  }),
  uc.login
);
router.all("/accounts/logout", uc.logout);
router.get('/payments', (req, res) => {
  res.render('payment_dashboard.hbs')
});
router.get('/dashboard', (req, res) => {
  res.render("public_dashboard.hbs")
})

module.exports = router;
