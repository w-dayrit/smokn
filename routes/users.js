var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

router.get('/', function(req, res, next) {
  res.render('landingpage', {title: 'SMOKN'});
});

// GET users listing
router.get('/users/index', userController.renderUserIndex);

// GET new user form
router.get('/users/new', userController.renderUserNew);

// GET user profile
router.get('/users/:id', userController.renderUserShow);

// POST new user info
router.post('/users', userController.renderUserCreate);


module.exports = router;
