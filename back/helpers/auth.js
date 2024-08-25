const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    // res.send('No Autorizado');
    res.redirect('http://localhost:5173/login');
};

module.exports = helpers;