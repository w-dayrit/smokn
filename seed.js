var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/smokn');
console.log('mongoose connected');
var User      = require('./models/User');
var SmokeSpot = require('./models/SmokeSpot');
var Match     = require('./models/Match');

// SmokeSpot.remove({}, function(err) {
//   if (err) console.log(err);
// });
console.log("All entries removed...");

var newSmokeSpots = [
  {name: 'Los Angeles, CA'},
  {name: 'Santa Monica, CA'},
  {name: 'Pasadena, CA'}
];

// // callback style
// User.remove({}, function(err, entry) {
//   if (err) console.log(err);
//   console.log('Entries cleared');
// });

// var testUsers = function() {};

// User.register(new User({
//   username: 'coolguy45',
//   password: 'waffles',
//   email: 'coolguy45@email.com',
//   birthday: '10/18/1985',
//   userDescription: 'Nice guys finish first, always',
//   userGender: 'M',
//   matchPreference: 'F',
//   photo_url: 'http://colinmendelsohn.com.au/files/8413/5806/8663/e-cigarette-smoker.jpg',
//   type: ['Cigarette', 'Marijuana'],
//   matches: [],
//   smokespots: []
// }), '123', testUsers);

// User.register(new User({
//   username: 'niceGuy2015',
//   password: 'waffles',
//   email: 'niceGuy2015@email.com',
//   birthday: '10/18/1985',
//   userDescription: 'I am really cool and my favorite animal is a tiger.',
//   userGender: 'M',
//   matchPreference: 'F',
//   photo_url: 'http://colinmendelsohn.com.au/files/8413/5806/8663/e-cigarette-smoker.jpg',
//   type: ['Cigarette', 'Marijuana'],
//   matches: [],
//   smokespots: []
// }), '123', testUsers);

User.create(newUser, function(err, user) {
  if (err) console.log(err);
  console.log('seeded!');
});


