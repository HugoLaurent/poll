const { Poll } = require('../models');

const mainController = {

    // méthode pour la page d'accueil
    async homePage(req, res){      
        try{
            const polls = await Poll.findAll({
                include: [
                    {
                    association: "author",
                    attributes: ["pseudo"]
                    }
                ]
            })
         res.render("home", { polls })  
        } catch (error) {
            res.status(500).send('Une erreur est survenue ');
        }                
    }
}

module.exports = mainController;