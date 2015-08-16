var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/smokn');

var User = require('./models/User');

// callback style
User.remove({}, function(err) {
  if (err) console.log(err);
});

console.log("All entries removed...");

var newUsers = [
  {
    email: '1@email.com',
    birthday: '10/18/1985',
    userDescription: '1\'s test description',
    userGender: 'M',
    matchPreference: 'F'
  },
  {
    email: '2@email.com',
    birthday: '10/18/1985',
    userDescription: '2\'s test description',
    userGender: 'F',
    matchPreference: 'M'
  }
];

// promise style
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
