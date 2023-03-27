const isMember = (req, res, next) => {
    // On a enchainé les middlewares, si on est la on a un user
    if (req.session.userRole === 'member' || 'admin') {
        return next();
    }

    req.status = 401;
    return next(new Error('Unauthorized'));
};

module.exports = isMember;
