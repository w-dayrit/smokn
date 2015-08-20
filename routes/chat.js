var express = require('express');
var router = express.Router();
var chatController = require('../controllers/chatController');


// GET chat room
router.get('/chat', chatController.showChat);

module.exports = router;
