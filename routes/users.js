var express = require('express');
var passport = require('passport');
var User = require('../models/User');
var router = express.Router();
var userController = require('../controllers/userController');
var sessionsController = require('../controllers/sessionsController');

function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();
  // if they aren't redirect them to the login page
  res.redirect('/login');
}


// GET user api
router.get('/smokn/users', isLoggedIn, function(req, res, next) {
  User.find({}, function(err, users) {
    if (err) res.send(err);

    res.json(users);
  })
});

// GET landing page
router.get('/', function(req, res) {
  res.render('landingpage', {user: req.user});
});

router.get('/login', sessionsController.renderLoginPage);


router.post('/login', passport.authenticate(
 'local',
 {
   failureRedirect: '/login'
 }),
 sessionsController.loginUser
);


// show about page
router.get('/about', userController.renderAbout);

// USER CRUD FUNCTIONS

// show all the users (or one random user)
router.get('/users/index', isLoggedIn, userController.renderUserIndex);

// render new user form
router.get('/auth/new', userController.renderUserNew);

// create new user
router.post('/users', userController.renderUserCreate);

// show user profile
router.get('/users/:id', isLoggedIn, userController.renderUserShow);

// render edit user form
router.get('/users/:id/edit', isLoggedIn, userController.renderUserEdit);

// edit user info
router.put('/users/:id', isLoggedIn, userController.editUser);

// delete user profile
router.delete('/users/:id', userController.deleteUser);

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});


module.exports = router;
