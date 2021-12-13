const  axios = require('axios');
const { models } = require('../sequelize');

class UserController {
  async register(req, res) {
    if (req.method == "POST") {
      // do request validation
        const user = await models.User.create(req.body)
        res.redirect('/accounts/login')
        return;
    }
  
    res.render("register.hbs");
  }

  async login(req, res) {
    if (req.method === "POST") {
      
      res.redirect('/accounts/dashboard')
      return;
    }

    res.render("login.hbs");
  }

  async logout(req, res) {
    req.logout()
    res.redirect('/')
  }

  async dashboard(req, res) {
    const monoPublicKey = process.env["MONO_PUBLIC_KEY"]
    const user = req.user
    
    if (req.method === "POST"){
      const {code, id} = req.body
      let url = 'https://api.withmono.com/account/auth'

      if (code) {
        try {
          const resp = await axios.post(url, JSON.stringify({code}), {
            headers: {
              'Content-Type': 'application/json',
              'mono-sec-key': process.env['MONO_SECRET_KEY']
            }
          })
          console.log(resp)
          user.monoId =  resp.data.id
          user.monoCode = code
          user.monoStatus = false
          await user.save()
        } catch (err) {
          res.status(500).json({'status':'error'})
          throw new Error(err)
        }
      }
      return res.json({'status': 'success'})
    }

    if (user.monoId) {
      const apiURL = `https://api.withmono.com/accounts/${user.monoId}/`
      const responses = await Promise.all([
        getRequest(`${apiURL}identity`),
        getRequest(`${apiURL}statement`),
        getRequest(`${apiURL}income`),
      ])
      
      res.locals.dashboard = responses[0].data
      res.locals.statement = responses[1].data
      const score = calculateUserScore(responses[2].data)
      res.locals.score = score.toFixed(2)
    }

    return res.render("dashboard.hbs", {monoPublicKey, date: new Date().toDateString()});
  }
}

// stub out credit score algorithm
function calculateUserScore(userData) {
  return (userData.amount / 1000000)
}

async function getRequest(url) {
  return await axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
      'mono-sec-key': process.env['MONO_SECRET_KEY']
    }
  })
}

module.exports = UserController;
