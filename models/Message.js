var mongoose = require('mongoose');

var MessageSchema = mongoose.Schema({
  sender: String,
  receiver: String,
  message:  String,
  sentAt: {
    type: Date, default: Date.now
  }
});

module.exports = mongoose.model('Message', MessageSchema);
