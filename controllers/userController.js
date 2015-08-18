var passport = require('passport');
var User = require('../models/User');

// GET '/' - renders index page
module.exports.renderUserIndex = function(req, res, next) {
  res.render('users/index', {title: 'SMOKN'});
};

module.exports.renderUserNew = function(req, res, next) {
  res.render('auth/new', {title: 'SMOKN'});
};

module.exports.renderUserShow = function(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    res.render('users/show', {title: 'SMOKN', user: user});
  });
};

module.exports.renderUserCreate = function(req, res, next) {
  User.register(
    new User({
      username: req.body.username,
      email: req.body.email,
      userDescription: req.body.userDescription,
      birthday: req.body.birthday,
      userGender: req.body.userGender,
      matchPreference: req.body.matchPreference,
      type: req.body.type,
      photo_url: req.body.photo_url
    }), req.body.password, function(err, user) {
    if (err) return res.render('auth/new', {user: user});
    passport.authenticate('local')(req, res, function() {
      req.session.save(function(err) {
        if (err) {
          return next(err);
      }
      res.redirect('/users/' + user.id);
      });
    });
  });
};

