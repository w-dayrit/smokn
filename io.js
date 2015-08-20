var io = require('socket.io')();
var namespace = io.of('/customnamespace')
namespace.on('connection', function(socket){
  //proceed as normal
});

var namespaces = {};

// getNamespace() generates "/user1|user2"
// namespaces[getNamespace()]=io.of(getNamespace() )

io.on('connection', function(socket) {
  console.log('User connected');
  socket.on('disconnect', function(){
    console.log('User disconnected');
  });

  socket.on('register-chat', function(ns){
    console.log('message: ' + ns);
    if (!namespaces[ns]) {
      namespaces[ns] = io.of(ns);
      namespaces[ns].on("private-message", function(data) {
        namespaces[ns].emit("private-message", data);
      });
    };
  });

});

module.exports = io;
