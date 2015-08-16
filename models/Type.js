var mongoose = require('mongoose');

var TypeSchema = mongoose.Schema({
  category: String
});

module.exports = mongoose.model('Type', TypeSchema);



