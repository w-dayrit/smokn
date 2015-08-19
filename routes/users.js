var express = require('express');
var passport = require('passport');
var User = require('../models/User');
var router = express.Router();
var userController = require('../controllers/userController');
var sessionsController = require('../controllers/sessionsController');


// GET user api
router.get('/smokn/users', function(req, res, next) {
  User.find({}, function(err, users) {
    if (err) res.send(err);

    res.json(users);
  })
});

// GET landing page / log in page
// router.get('/', sessionsController.renderLoginPage);
router.get('/', function(req, res) {
  res.render('landingpage', {user: req.user});
});
router.get('/login', sessionsController.renderLoginPage);

router.get('/login', function(req, res) {
  res.render('auth/login', {user : req.user });
});

// Login user
// router.post('/login',
//   passport.authenticate('local',
//   {
//     failureRedirect: '/auth/login'
//   }),
//   sessionsController.loginUser);
router.post('/login', passport.authenticate(
 'local',
 {
   failureRedirect: '/login'
 }),
 function (req, res, next) {
   req.session.save(function (err) {
     if (err) return next(err);
     res.redirect('/');
   });
 }
);

// GET users listing
router.get('/users/index', userController.renderUserIndex);

// GET new user form
router.get('/auth/new', userController.renderUserNew);

// GET user profile
router.get('/users/:id', userController.renderUserShow);

// POST new user info
router.post('/users', userController.renderUserCreate);

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});


module.exports = router;
