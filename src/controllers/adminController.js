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
}

    /* async changeRoleUser (req,res) {
        console.log(req.body);
        const role = req.body.selectRole;
        const id = req.body.selectUser

        const user = await User.findByPk(id); 
              
        const roleChange = await User.update(
        {
            role: role
        },
        {
            where: user
        });
        res.render('/dashboard', {Message: "Update Sucess"  });
    } */
}

module.exports = adminController;