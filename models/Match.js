var mongoose = require('mongoose');

var MatchSchema = mongoose.Schema({
  userOne: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  userTwo: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  status:  String
});

module.exports = mongoose.model('Match', MatchSchema);
