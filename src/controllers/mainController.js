const { Poll } = require('../models');

const mainController = {

  // méthode pour la page d'accueil
  async homePage(req, res){

    req.session.vote = req.session.vote || [];
    const votes = req.session.vote;
   
    req.session.guest = true;
    const guest = req.session.guest;
    try{
      const polls = await Poll.findAll({
        include: [
          {
            order: ["title"],
            association: "author",
            attributes: ["pseudo"]
          }
        ]
      });     
      res.render("frontPage", { polls, guest, votes });
      console.log(req.session);
    } catch (error) {
      res.status(500).send('Une erreur est survenue');
    }
  },

  async addVote(req, res){

    const choice = req.body.choice;
    const pollId = Number(req.body.id);

    const polls = await Poll.findAll({
      include: [
        {
          order: ["title"],
          association: "author",
          attributes: ["pseudo"]
        }
      ]});

    req.session.vote = req.session.vote || [];
    const votes = req.session.vote;    
    
    
    if(!choice) {
      const guest = req.session.guest;
      res.render('frontPage', {polls, guest, votes, errorMessage: "Please make a choice on the poll before submitting it"});
      return;

    } else {
      
      const guest = req.session.guest;
      await Poll.increment(choice, {where: {id: pollId }} );  
      votes.push(pollId);          
      res.redirect('/');
    }
  }

};





module.exports = mainController;




/* Project.update(
    { title: 'a very different title now' },
    { where: { _id: 1 } }
  )





// Change everyone without a last name to "Doe"
await User.update({ lastName: "Doe" }, {
    where: {
      lastName: null
    }
  }); */