const { Poll } = require("../models")
const bcrypt = require('bcrypt');

const loadToLocals = async (req,res,next) =>{
    if(req.session){

        req.session.guest = true;
        const guest = req.session.guest;
        res.locals.guest = guest

        req.session.vote = req.session.vote || [];
        const votes = req.session.vote;
        res.locals.votes = votes

        const polls = await Poll.findAll({
            include: [
              {
                order: ["question"],
                association: "author",
                attributes: ["pseudo"]
              }
            ]
          });
        res.locals.polls = polls
    }
    
    next();   

};

module.exports = loadToLocals;