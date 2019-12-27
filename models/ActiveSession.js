const mongoose = require('mongoose');

const ActiveSessionSchema = new mongoose.Schema({
  userAcEmail: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('ActiveSession', ActiveSessionSchema);