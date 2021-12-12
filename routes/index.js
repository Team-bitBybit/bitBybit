const router = require("express").Router();
const passport = require("../config/passport");
const { home, User } = require("../controllers");

const uc = new User();

router.get("/", home);
router.all("/accounts/dashboard", uc.dashboard);
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

module.exports = router;
