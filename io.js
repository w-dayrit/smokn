var io = require('socket.io')();
var namespace = io.of('/customnamespace')
namespace.on('connection', function(socket){
  //proceed as normal
});

io.on('connection', function(socket) {
  console.log('User connected');
  socket.on('disconnect', function(){
    console.log('User disconnected');
  });

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

});

module.exports = io;
