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
// router.post('/',
//   passport.authenticate('local',
//   {
//     failureRedirect: '/'
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


// show about page
router.get('/about', userController.renderAbout);

// USER CRUD FUNCTIONS

// show all the users (or one random user)
router.get('/users/index', userController.renderUserIndex);

// render new user form
router.get('/auth/new', userController.renderUserNew);

// create new user
router.post('/users', userController.renderUserCreate);

// show user profile
router.get('/users/:id', userController.renderUserShow);

// render edit user form
router.get('/users/:id/edit', userController.renderUserEdit);

// edit user info
router.put('/users/:id', userController.editUser);

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});


module.exports = router;
