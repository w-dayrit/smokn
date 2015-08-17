var mongoose = require('mongoose');
//cm
var passportLocalMongoose = require('passport-local-mongoose');

//cm
var User = new mongoose.Schema({
  name: String
});

//cm
User.plugin(passportLocalMongoose);

var UserSchema = mongoose.Schema({
  email: String,
  birthday: Date,
  userDescription: String,
  userGender: String,
  matchPreference: String,
  photo_url: String,
  type: [String],

  // embed matched users and locations
  matches: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  }],

  smokespots: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'SmokeSpot'
  }]
});

module.exports = mongoose.model('User', UserSchema);


//reference inside user

