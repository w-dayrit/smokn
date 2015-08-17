var User = require('../models/User');

// GET '/' - renders index page
module.exports.renderUserIndex = function(req, res, next) {
  res.render('users/index', {title: 'SMOKN'});
};

module.exports.renderUserNew = function(req, res, next) {
  res.render('users/new', {title: 'SMOKN'});
};

module.exports.renderUserShow = function(req, res, next) {
  User.findById(req.params.id, function(err, entry) {
    res.render('users/show', {title: 'SMOKN', entry:entry});
  });
};

module.exports.renderUserCreate = function(req, res, next) {
  User.create(req.body.user, function(err, user) {
    if (err) res.send('> ' + err);
    res.redirect('/users/' + user.id);
  })
}
