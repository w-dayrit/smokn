var express = require('express');
var router = express.Router();
var Match = require('../models/Match');
var User = require('../models/User');
var passport = require('passport');
var userController = require('../controllers/userController');
var sessionsController = require('../controllers/sessionsController');

// GET matches api
router.get('/smokn/matches', function(req, res, next) {
  Match.find({}, function(err, matches) {
    if (err) res.send(err);

    res.json(matches);
  });
});



// GET page for testing POST action to API
router.get('/smokn/showone', function(req, res, next) {
  res.render('showone', {title: 'SMOKN', user: req.user});
});

// POST match to API
router.post('/smokn/matches', function(req, res, next) {
    console.log("User One: " + req.body.match.userOne);
    console.log("User Two: " + req.body.match.userTwo);
  Match.create(req.body.match, function(err, match) {
    if (err) res.send(err);
    User.update({_id: req.body.match.userOne},
      {$push: {'matches': match}}, { upsert: true }).exec();
    User.update({_id: req.body.match.userTwo},
      {$push: {'matches': match}}, { upsert: true }).exec();
    res.json(match);
  });
});




module.exports = router;
