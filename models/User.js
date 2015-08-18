var mongoose = require('mongoose');

var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = mongoose.Schema({
  email: String,
  birthday: Date,
  userDescription: String,
  userGender: String,
  matchPreference: [String],
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

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);

