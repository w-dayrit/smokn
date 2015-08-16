var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  Description: String,
  I_am: String,
  I_want: String
});

module.exports = mongoose.model('User', UserSchema);

//reference inside user

