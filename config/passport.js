const passport = require('passport')
const LocalStrategy = require('passport-local')
const { User } = require('../sequelize').models


function init() {
    passport.use(new LocalStrategy({usernameField: 'email'}, async (email, password, cb) =>{
        const user = await User.findOne({ where: { email: email}})
       
        if (!user){
            cb(null, false, {message: 'user not found'})
        }else if (!(await user.checkPassword(password))) {
            cb(null, false, {message: 'invalid user credentials'})
        }else {
            cb(null, user)
        }
    }))

    passport.serializeUser((user, cb) => {
        cb(null, user.id) 
    })

    passport.deserializeUser(async (id, cb) => {
      const user = await User.findByPk(id)
      cb(null, user)
    })
}

init()

module.exports = passport