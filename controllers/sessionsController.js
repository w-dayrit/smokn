var passport = require('passport');
var User = require('../models/User');

module.exports.renderLoginPage = function(req, res) {
  res.render('landingpage', {user: req.user});
};

module.exports.loginUser = function(req, res, next) {
  req.session.save(function(err) {
    if(err) return next(err);
    res.redirect('users/index');
  });
};

