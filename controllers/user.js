class UserController {
    
    register(req, res) {

    }
    
    
    login(req, res) {
        
        if (req.method == "POST") {
            return
        }

        res.render("login.hbs")
    }
}

module.exports = UserController