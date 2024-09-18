const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { sendOtp, verifyOtp } = require('../utils/otpUtils');

const JWT_SECRET = '';

// Send OTP
router.post('/send-otp', async (req, res) => {
  const { phoneNumber } = req.body;

  try {
    const status = await sendOtp(phoneNumber);
    res.status(200).json({ message: 'OTP sent successfully', status });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ error: error.message });
  }
});

// Verify OTP
router.post('/verify-otp', async (req, res) => {
    const { phoneNumber, otp } = req.body;
  
    if (!phoneNumber || !otp) {
      return res.status(400).json({ success: false, message: 'Phone number and OTP are required' });
    }
  
    try {
      const status = await verifyOtp(phoneNumber, otp);
  
      if (status === 'approved') {
        let user = await User.findOne({ phoneNumber });
  
        if (!user) {
          // Create a new user if they don't exist
          user = await User.create({ phoneNumber });
        }
  
        // Generate a JWT token
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
  
        // Respond with success and token
        res.status(200).json({ success: true, token, isNewUser: !user.isExistingUser });
      } else {
        res.status(400).json({ success: false, message: 'Invalid OTP' });
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });

module.exports = router;
