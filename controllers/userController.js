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
  User.create(req.body.user, function(err, user) {
    if (err) res.send('> ' + err);
    res.redirect('/users/' + user.id);
  })
}

