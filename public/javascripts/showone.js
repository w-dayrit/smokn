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
  return user.userGender === "woman" && user.userGender === "man";
}
var isFemaleAndNonBinary = function(user) {
  return user.userGender === "woman" && user.userGender === "nonBinary";
}
var isMaleAndNonBinary = function(user) {
  return user.userGender === "man" && user.userGender === "nonBinary";
}
var isAllThree = function(user) {
  return user.userGender === "man" && user.userGender === "woman" && user.userGender === "nonBinary";
}



// var isUserPreferred = function(currentUserPref, user) {
//   if(currentUserPref === "f") {
//     return user.userGender === "woman";
//   } else if (currentUserPref === "m") {
//     return user.userGender === "man";
//   } else if (currentUserPref === "x") {
//     return user.userGender === "nonBinary";
//   } else if (currentUserPref === "fm") {
//     return user.userGender === "woman" && user.userGender === "man";
//   } else if (currentUserPref === "fx") {
//     return user.userGender === "woman" && user.userGender === "nonBinary";
//   } else if (currentUserPref === "mx") {
//     return user.userGender === "man" && user.userGender === "nonBinary";
//   } else if (currentUserPref === "fmx") {
//     return user.userGender === "man" && user.userGender === "woman" && user.userGender === "nonBinary";
//   } else {
//     alert('Broken function');
//   }
// }

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
  // console.log(oneUser[0].photo_url);
  // console.log(oneUser[0]._id);

  $('#userPic').attr('src', $('#userPic').attr('src') + userPhoto);
  $('.potential-smokemate').attr("data-uid", oneUser._id);
})
.fail(function(err) {
  console.log(err);
});


// Creates Match object with hidden data, POSTs to Matches API
$dislike = $('body > div > div.other-users > div > button:nth-child(3)');

$dislike.on('click', function(e) {
  // console.log($(this).data('status'));
  // console.log($(this).parent().data('uid'));
  // console.log($(this).parent().parent().parent().data('current-uid'));

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


$like = $('body > div > div.other-users > div > button:nth-child(4)');

$like.on('click', function(e) {
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
