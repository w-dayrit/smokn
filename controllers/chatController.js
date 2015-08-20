var passport = require('passport');
var User = require('../models/User');

module.exports.showChat = function(req, res, next) {
  res.render('chat/chat', {title: "SMOKN", user: req.user});
}
