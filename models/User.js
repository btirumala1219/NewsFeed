const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true
  },
  userPass: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', UserSchema);