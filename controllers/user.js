class UserController {
  async register(req, res) {
    if (req.method == "POST") {
        return;
    }
  
    res.render("register.hbs");
  }

  async login(req, res) {
    if (req.method == "POST") {
      return;
    }

    res.render("login.hbs");
  }

  async dashboard(req, res) {
    return res.render("dashboard.hbs", {});
  }
}

module.exports = UserController;
