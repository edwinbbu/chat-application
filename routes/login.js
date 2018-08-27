var express = require('express');
var router = express.Router();
var passport = require('passport');
require('../config/passport');

router.route('/')
    .get(function (req, res) {
        res.render('login');
    })
    .post(passport.authenticate('login',{
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    }));

module.exports = router;
