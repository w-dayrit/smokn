var mongoose = require('mongoose');

var SmokeSpotSchema = mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('SmokeSpot', SmokeSpotSchema);


