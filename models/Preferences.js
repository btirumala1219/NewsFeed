const mongoose = require('mongoose');

const PreferencesSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  Preferences: {
    type: [String],
    required: false
  }
});

module.exports = mongoose.model('Preferences', PreferencesSchema);