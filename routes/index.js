var express = require('express');
var router = express.Router();
require('../config/passport')

router.route('/')
    .get(isLoggedIn,function (req, res) {
        res.render('index');
    });


    router.route('/logout')
    .get(function (req, res) {
        req.logout();
        req.flash('error', "Succesfully logged out");
        res.redirect('/login');
    })
// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.redirect('/login');
}    
module.exports = router;