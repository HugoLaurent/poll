const loadGuestToLocals = (req,res,next) =>{
    if(req.session){

        req.session.guest = true;
        const guest = req.session.guest;
        res.locals.guest = guest

        req.session.vote = req.session.vote || [];
        const votes = req.session.vote;
        res.locals.votes = votes
    }
    
    next();

};

module.exports = loadGuestToLocals;