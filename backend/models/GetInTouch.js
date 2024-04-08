const mongoose = require('mongoose');

const getInTouchSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  message: String
});

module.exports = mongoose.model('GetInTouch', getInTouchSchema);
