const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true, unique: true },
  username: {
    type: String
  },
  address: {
    pincode: {
      type: String
    },
    area: {
      type: String
    },
    flatOrBuilding: {
      type: String
    }
  },
  profileComplete: { type: Boolean, default: false }, // You might want to track if the profile is complete
//   password: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
