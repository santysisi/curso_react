function controlarSession(req, res, next) {
    if(!req.session.name)
        if(req.url != "/login")
            res.redirect('/login');
    next();
}


module.exports = {
    controlarSession
}