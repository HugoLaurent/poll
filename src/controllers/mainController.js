const { Poll } = require('../models');

const mainController = {

  // méthode pour la page d'accueil
  async homePage(req, res) {
    
    try{    
      req.session.guest = true
      res.render("index");
      console.log(req.session);
    } catch (error) {
      res.status(500).send('Une erreur est survenue');
    }
  },

  async addVote(req, res) {

    const choice = req.body.choice;
    const pollId = Number(req.body.id);
    
    if(!choice) {
      res.render('frontPage', { errorMessage: "Please make a choice on the poll before submitting it" });
      return;
    } else {       
        await Poll.increment(choice, { 
          where: { 
            id: pollId 
          }});  
        res.locals.votes.push(pollId);          
        res.redirect('/');
    }
  },

  async pollPage(req, res) {
    res.render('poll');
  }

};


module.exports = mainController;

