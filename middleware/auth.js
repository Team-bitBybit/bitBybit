function mustAuth(req, res, next) {
    if (!req.user) {
        res.redirect('/accounts/login')
        return 
    }

    next()
}

module.exports = { mustAuth }