document.addEventListener("DOMContentLoaded", function() {

var Match = function(userOne, userTwo, status) {
  this.userOne = userOne;
  this.userTwo = userTwo;
  this.status  = status;
};

$buttonUp = $('body > div.other-users > div > button:nth-child(3)');

  $buttonUp.on('click', function(e) {
    // console.log($(this).data('status'));
    // console.log($(this).parent().data('uid'));
    // console.log($(this).parent().parent().data('current-uid'));

    var userOne = $(this).parent().data('uid');
    console.log(userOne);
    var userTwo = $(this).parent().parent().data('current-uid');
    console.log(userTwo);
    var status = $(this).data('status');
    console.log(status);

    var match = new Match(userOne, userTwo, status);
    console.log(match);
    var str = $.param(match);
    console.log(str);

    $.ajax({
      method:   "POST",
      url:      "http://localhost:3000/smokn/matches",
      data:     JSON.stringify({
        match: {
          userOne: userOne,
          userTwo:userTwo,
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
