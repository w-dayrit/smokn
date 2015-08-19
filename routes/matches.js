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




module.exports = router;
