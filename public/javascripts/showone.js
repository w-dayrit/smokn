document.addEventListener("DOMContentLoaded", function() {

var Match = function(userOne, userTwo, status) {
  this.userOne = userOne;
  this.userTwo = userTwo;
  this.status  = status;
};

// var function = isUserPreferred(user) {
//   if(user.)
// }

$.ajax({
method:   "GET",
url:      "http://localhost:3000/smokn/users",
dataType: "json",
})
.success(function(data) {
  var oneUser = data.filter(function(user){
    return user.username === '2';
  })
  // console.log(oneUser[0].photo_url);
  // console.log(oneUser[0]._id);


  $('#userPic').prepend('<img src="http://colinmendelsohn.com.au/files/8413/5806/8663/e-cigarette-smoker.jpg" height="300"/>');
  $('.potential-smokemate').attr("data-uid", oneUser[0]._id);
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
