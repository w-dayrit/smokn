document.addEventListener("DOMContentLoaded", function() {

var Match = function(userOne, userTwo, status) {
  this.userOne = userOne;
  this.userTwo = userTwo;
  this.status  = status;
};

var isFemale = function(user) {
  return user.userGender === "woman";
}
var isMale = function(user) {
  return user.userGender === "man";
}
var isNonBinary = function(user) {
  return user.userGender === "nonBinary";
}
var isFemaleAndMale = function(user) {
  return user.userGender === "woman" || user.userGender === "man";
}
var isFemaleAndNonBinary = function(user) {
  return user.userGender === "woman" || user.userGender === "nonBinary";
}
var isMaleAndNonBinary = function(user) {
  return user.userGender === "man" || user.userGender === "nonBinary";
}
var isAllThree = function(user) {
  return user.userGender === "man" || user.userGender === "woman" && user.userGender === "nonBinary";
}


var currentUserPref = $('#current-user').data('current-pref');

console.log(currentUserPref);

$.ajax({
method:   "GET",
url:      "http://localhost:3000/smokn/users",
dataType: "json",
})
.success(function(data) {

  if(currentUserPref === "f") {
    var userlist = data.filter(isFemale);
  } else if (currentUserPref === "m") {
    var userlist = data.filter(isMale);
  } else if (currentUserPref === "x") {
    var userlist = data.filter(isNonBinary);
  } else if (currentUserPref === "fm") {
    var userlist = data.filter(isFemaleAndMale);
  } else if (currentUserPref === "fx") {
    var userlist = data.filter(isFemaleAndNonBinary);
  } else if (currentUserPref === "mx") {
    var userlist = data.filter(isMaleAndNonBinary);
  } else if (currentUserPref === "fmx") {
    var userlist = data.filter(isAllThree);
  } else {
    alert('Broken function');
  }

  console.log(userlist);

  var oneUser = userlist.shift();

  console.log(oneUser);

  var userPhoto = oneUser.photo_url;
  console.log(oneUser.photo_url);
  // console.log(oneUser[0]._id);

  $('#userPic').attr('src', $('#userPic').attr('src') + userPhoto);
  $('.potential-smokemate').attr("data-uid", oneUser._id);
  $('#potential-smokemate-name').html(oneUser.username);
  $('#potential-smokemate-name').attr('href', $('#potential-smokemate-name').attr('href') + 'http://localhost:3000/users/' + oneUser._id);

})
.fail(function(err) {
  console.log(err);
});


// Creates Match object with hidden data, POSTs to Matches API
$dislike = $('body > div > div.other-users > div > button:nth-child(5)');

$dislike.on('click', function(e) {
  console.log("dislike button works");
  // console.log($(this).data('status'));
  // console.log($(this).parent().data('uid'));
  // console.log($(this).parent().parent().parent().data('current-uid'));


  // logic to check if match is existing

  var userOne = $(this).parent().parent().parent().data('current-uid');
  var userTwo = $(this).parent().data('uid');
  var status = $(this).data('status');

  $.ajax({
    method:   "POST",
    url:      "http://localhost:3000/smokn/matches",
    data:     JSON.stringify({
      match: {
        userOne: userOne,
        userTwo: userTwo,
        status: status
      }
    }),
    contentType: 'application/json'
  })
    .success(function(data) {
      console.log('Created Match: ', data);
    })
    .fail(function(err) {
      console.log(err);
    });
});


$like = $('body > div > div.other-users > div > button:nth-child(6)');

$like.on('click', function(e) {
  console.log("like button works");

  var userOne = $(this).parent().parent().parent().data('current-uid');
  var userTwo = $(this).parent().data('uid');
  var status = $(this).data('status');

  $.ajax({
    method:   "POST",
    url:      "http://localhost:3000/smokn/matches",
    data:     JSON.stringify({
      match: {
        userOne: userOne,
        userTwo: userTwo,
        status: status
      }
    }),
    contentType: 'application/json'
  })
    .success(function(data) {
      console.log('Created Match: ', data);
    })
    .fail(function(err) {
      console.log(err);
    });
});



})
