async function home(req, res) {
    return res.render('index.hbs', {})
}

module.exports = {
    home,
}
