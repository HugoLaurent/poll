const { User, Poll } = require('../models');


const memberAuth = {
async memberPage(req, res) {
    res.render('profil');
  }

}

module.exports = memberAuth;