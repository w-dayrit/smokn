var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/smokn');

var User = require('./models/User');
var SmokeSpot = require('./models/SmokeSpot');
// callback style
User.remove({}, function(err) {
  if (err) console.log(err);
});

SmokeSpot.remove({}, function(err) {
  if (err) console.log(err);
});
console.log("All entries removed...");

var newSmokeSpots = [
  {name: 'Los Angeles, CA'},
  {name: 'Santa Monica, CA'},
  {name: 'Pasadena, CA'}
];

var newUsers = [
  {
    email: '1@email.com',
    birthday: '10/18/1985',
    userDescription: '1\'s test description',
    userGender: 'M',
    matchPreference: 'F',
    photo_url: 'http://colinmendelsohn.com.au/files/8413/5806/8663/e-cigarette-smoker.jpg',
    type: ['Cigarette', 'Marijuana'],
    matches: ['55d115631285b70eed3d9c52', '55d239b7df4946a56a5703a5'],
    smokespots: ['55d23d5d843ed2af7076af9c', '55d23f29d69936d073855138']
  },
  {
    email: '2@email.com',
    birthday: '10/18/1985',
    userDescription: '2\'s test description',
    userGender: 'F',
    matchPreference: 'M',
    photo_url: 'http://colinmendelsohn.com.au/files/8413/5806/8663/e-cigarette-smoker.jpg',
    type: ['Cloves', 'Cigar'],
    matches: ['55d115631285b70eed3d9c52', '55d239b7df4946a56a5703a5'],
    smokespots: ['55d23d5d843ed2af7076af9e', '55d23f29d69936d073855138']
  }
];

// promise style
SmokeSpot
  .create(newSmokeSpots)
  .then(
    function(locations) {
      console.log(locations.length + " smokespots seeded.");
    }, function(err) {
      console.log(err);
    });

User
  .create(newUsers)
  .then(
    function(users) {
      console.log(users.length + " users seeded.");
    }, function(err) {
      console.log(err);
  })
  .then(function() {
    mongoose.disconnect();
  });
