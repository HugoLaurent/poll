const { User } = require('../models');

const adminController = {
    async homeAdminPage (req, res) {
        try{
        const users = await User.findAll({attributes: ["pseudo", "id"]});
        res.render('dashboard', {users});
    }
catch (error) {
    res.status(500).send('Une erreur est survenue');
  }
},
}

module.exports = adminController;