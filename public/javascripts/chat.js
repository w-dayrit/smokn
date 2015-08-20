document.addEventListener("DOMContentLoaded", function() {

  function getNamespace(me, otherUser) {
    var ns;
    if( me < otherUser) {
      ns = '/' + me + '-' + otherUser;
    } else {
      ns = '/' + otherUser + '-' + me;
    };
    return ns;
  };

  var ns = getNamespace(me, otherUser);
  var socket = io();

  socket.emit('register-chat', ns);

  socket.on('private-message', function(msg){
    var s = msg.sender + " > " + msg.receiver + ": " + msg.message;
    $('#messages').append($('<li>').text(s));
    console.log(msg);
  });

  function sendMessage(message) {
    console.log(socket);
    socket.emit("private-message", {
      sender: me,
      receiver: otherUser,
      message: message
    });
  };

  $('form').submit(function(){
    sendMessage($('#m').val());
    $('#m').val('');
    return false;
  });

})
