var mongoose = require('mongoose');

var LocationSchema = mongoose.Schema({
  name: Number
});

module.exports = mongoose.model('Location', LocationSchema);


