const router = require("express").Router();

const UserController = require("../controllers/user");

const uc = new UserController();

router.get("/register", uc.register);
router.get("/login", uc.login);

module.exports = router;
