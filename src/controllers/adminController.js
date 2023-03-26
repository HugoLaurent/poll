const { User, Poll } = require('../models');
const { update } = require('../models/User');

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

  async changeRoleUser (req,res) {        
    const role = req.body.selectRole;
    const id = req.body.selectUser 
    const users = await User.findAll({attributes: ["pseudo", "id"]});
    const roleChange = await User.update(
      {
        role: role
      },
      {
        where: {id: id }
      });
    res.render('dashboard', { users,message1: "update sucess" });
  },


  async deletePoll (req,res) {    
    const id = req.body.selectPoll;
    const users = await User.findAll({attributes: ["pseudo", "id"]});
    const result = await Poll.destroy({
      where: {
        id: id
      }});

    res.render('dashboard', { users,message2: "Delete Poll sucess" });
  }
}

module.exports = adminController;