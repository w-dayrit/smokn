var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/smokn');

var User      = require('./models/User');
var SmokeSpot = require('./models/SmokeSpot');
var Match     = require('./models/Match');


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
    username: '1@email.com',
    password: '1',
    email: '1@email.com',
    birthday: '10/18/1985',
    userDescription: '1\'s test description',
    userGender: 'M',
    matchPreference: 'F',
    photo_url: 'http://colinmendelsohn.com.au/files/8413/5806/8663/e-cigarette-smoker.jpg',
    type: ['Cigarette', 'Marijuana'],
    matches: [],
    smokespots: []
  },
  {
    username: '2@email.com',
    password: '2',
    email: '2@email.com',
    birthday: '10/18/1985',
    userDescription: '2\'s test description',
    userGender: 'F',
    matchPreference: 'M',
    photo_url: 'http://colinmendelsohn.com.au/files/8413/5806/8663/e-cigarette-smoker.jpg',
    type: ['Cloves', 'Cigar'],
    matches: [],
    smokespots: []
  }
];

// promise style

SmokeSpot
  .create(newSmokeSpots)
  .then(
    function(location) {
      console.log(location.length + " smokespots seeded.");
    }, function(err) {
      console.log(err);
    });



User.create(newUsers).then(
    function(users) {
      console.log(users.length + " users seeded.");
    }, function(err) {
      console.log(err);
  })
  .then(function() {
    mongoose.disconnect();
  });

User.list = function() {
  User.find({}).then(
        function(users) {
          users = users.map(function(user) {
            delete user.salt;
            delete user.hash;
            delete user.__v;
            return user;
          });
          console.log(users);
        }, function(err) {
          console.log(err);
        });
};

