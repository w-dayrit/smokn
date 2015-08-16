var mongoose = require('mongoose');

var LocationSchema = mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Location', LocationSchema);


