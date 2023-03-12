const dataMapper = require('../dataMapper.js');

const mainController = {

    // méthode pour la page d'accueil
    homePage: async (req, res) => {
      try {
        const polls = await dataMapper.getAllPoll();
        res.render("frontPage", { polls })
      } catch (error) {
        console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`)
      }
      
    }
}

module.exports = mainController;