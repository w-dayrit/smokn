var express = require('express');
var router = express.Router();
var Match = require('../models/Match');

// GET matches api
router.get('/smokn/matches', function(req, res, next) {
  Match.find({}, function(err, matches) {
    if (err) res.send(err);

    res.json(matches);
  })
});

router.get('/smokn/showone', function(req, res, next) {
  res.render('showone');
})

router.post('/smokn/matches', function(req, res, next) {

  console.log(req.body.match);

  Match.create(req.body.match, function(err, match) {
    if (err) res.send(err);

    res.json(match);
  });
});



module.exports = router;
