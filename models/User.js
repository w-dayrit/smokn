var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  email: String,
  birthday: Date,
  userDescription: String,
  userGender: String,
  matchPreference: String
});

module.exports = mongoose.model('User', UserSchema);

//reference inside user

