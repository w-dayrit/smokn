var express = require('express');
var passport = require('passport');
var User = require('../models/User');
var router = express.Router();
var userController = require('../controllers/userController');
var sessionsController = require('../controllers/sessionsController');


// GET landing page / log in page
router.get('/', sessionsController.renderLoginPage);

// Login user
router.post('/',
  passport.authenticate('local',
  {
    failureRedirect: '/'
  }),
  sessionsController.loginUser);

// GET users listing
router.get('/users/index', userController.renderUserIndex);

// GET new user form
router.get('/auth/new', userController.renderUserNew);

// GET user profile
router.get('/users/:id', userController.renderUserShow);

// POST new user info
router.post('/users', userController.renderUserCreate);


module.exports = router;
