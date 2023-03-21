const { User } = require("../models");

const authentifyRequestMiddleware = async (req, res, next) => {
    if(req.session.userId) {
        const userId = +req.session.userId;
        const user = await User.findByPk(userId);
        req.user = user;
        res.locals.user= user;
    }
    next();
}





module.exports = authentifyRequestMiddleware;
