var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

// GET users listing
router.get('/', userController.renderUserIndex);

// GET new user form
router.get('/users/new', userController.renderUserNew);

// GET user profile
router.get('/users/:id', userController.renderUserShow);

// POST new user info
router.post('/users', userController.renderUserCreate);



module.exports = router;
