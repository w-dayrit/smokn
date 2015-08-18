var mongoose = require('mongoose');

var MatchSchema = mongoose.Schema({
  user1: {
    objectID: String,
    status:   String
  },

  user2: {
    objectID: String,
    status:   String
  },

  status: String
});

module.exports = mongoose.model('Match', MatchSchema);
