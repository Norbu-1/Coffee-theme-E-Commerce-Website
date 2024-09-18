const twilio = require('twilio');

const accountSid = ''; // Your Account SID
const authToken = '';   // Your Auth Token
const client = new twilio(accountSid, authToken);
const serviceId = ''; // Your Twilio Verify Service SID



const sendOtp = async (phoneNumber) => {
  try {
    const verification = await client.verify.services(serviceId).verifications.create({
      to: phoneNumber,
      channel: 'sms'
    });
    return verification.status;
  } catch (error) {
    console.error('Failed to send OTP:', error.message);
    console.error('Error details:', error);
    throw new Error('Failed to send OTP');
  }
};

const verifyOtp = async (phoneNumber, code) => {
    try {
      // Validate phone number and OTP code format
      if (!phoneNumber || !code) {
        throw new Error('Phone number or OTP code is missing');
      }
  
      console.log('Attempting to verify OTP for phone number:', phoneNumber);
      console.log('OTP code:', code);
  
      // Call Twilio's verification check API
      const verificationCheck = await client.verify.services(serviceId).verificationChecks.create({
        to: phoneNumber,
        code: code
      });
  
      // Log and return the status
      console.log('Verification check response:', verificationCheck);
      return verificationCheck.status;
    } catch (error) {
      // Enhanced error logging
      console.error('OTP verification failed:', error.message);
      console.error('Error details:', JSON.stringify(error, null, 2));
      throw new Error('OTP verification failed');
    }
  };
  
  


module.exports = { sendOtp, verifyOtp };
