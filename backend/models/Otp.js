const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, index: { expires: '10m' } } // OTP expires in 10 minutes
});

module.exports = mongoose.model('Otp', otpSchema);
