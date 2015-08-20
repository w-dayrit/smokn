var passport = require('passport');
var User = require('../models/User');


// GET '/' - renders index page
module.exports.renderUserIndex = function(req, res, next) {
  User.find({}, function(err, users){
    res.render('users/index', {title: 'SMOKN', users: users, user: req.user});
  })
};


module.exports.renderUserNew = function(req, res, next) {
  res.render('auth/new', {title: 'SMOKN', user: req.user});
};

module.exports.renderUserShow = function(req, res, next) {
  User.findOne({_id: req.params.id}, function(err, userTwo) {
    res.render('users/show', {title: 'SMOKN', user: userTwo, userOne: req.user});
  });
};

module.exports.renderAbout = function(req, res, next) {
  res.render('users/about', {title: 'About SMOKN', user: req.user});
};

module.exports.renderUserEdit = function(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    res.render('users/edit', {title: 'SMOKN', user: req.user});
  });
};

module.exports.deleteUser = function(req, res, next) {
  User.findByIdAndRemove(req.params.id, function(err, user) {
    res.redirect('/');
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
      res.redirect('/users/index');
      });
    });
  });
};

module.exports.editUser = function(req, res, next) {
  var id = req.params.id;

  User.findById({_id: id}, function (err, user) {
    if (err) res.json({message: 'could not find user'});

    if (req.body.username) user.username = req.body.username;
    if (req.body.email) user.email = req.body.email;
    if (req.body.userDescription) user.userDescription = req.body.userDescription;
    if (req.body.birthday) user.birthday = req.body.birthday;
    if (req.body.userGender) user.userGender = req.body.userGender;
    if (req.body.matchPreference) user.matchPreference = req.body.matchPreference;
    if (req.body.type) user.type = req.body.type;
    if (req.body.photo_url) user.photo_url = req.body.photo_url;

    user.save(function(err) {
      if (err) {
        return next(err);
      }
      res.redirect('/users/index');
    });
  });
};



