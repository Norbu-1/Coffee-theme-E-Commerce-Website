import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { useDispatch } from 'react-redux';
import { LOGIN } from '../Redux/actions'; // Adjust import path
import Login from './Login';

const Otp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSendOtp = async () => {
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/auth/send-otp', { phoneNumber });
      setOtpSent(true);
      console.log('OTP sent successfully:', response.data.message);
    } catch (err) {
      console.error('Error sending OTP:', err.response?.data?.message || err.message);
      setError('Failed to send OTP. Please try again.');
    }
  };

  const handleVerifyOtp = async () => {
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/auth/verify-otp', { phoneNumber, otp });
      const { token, isNewUser } = response.data;
      setOtpVerified(true);
      console.log('OTP verified successfully:', token);

      // Store the token in localStorage
      localStorage.setItem('token', token);

      // Update Redux state
      dispatch({ type: LOGIN, payload: { token } });

      // Navigate based on user status
      if (isNewUser) {
        navigate('/profile'); // Redirect to profile if new user
      } else {
        navigate('/'); // Redirect to home if returning user
      }
    } catch (err) {
      console.error('OTP verification failed:', err.response?.data?.message || err.message);
      setError('Invalid OTP. Please try again.');
    }
  };

  const handleSwitching = () => {
    setShowOtp(true);
  };

  return (
    <>
      {showOtp ? (
        <Login/>
      ) : (
        <div className="w-[100%] h-auto bg-white p-6 flex flex-col">
          {!otpSent && (
            <div className="flex flex-col w-full p-4 bg-white">
              <h2 className="text-2xl font-serif font-semibold mb-4">Login with Mobile Number</h2>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="p-2 border-none rounded focus:outline-none focus:ring-0 focus:ring-blue-600"
              />
              <hr className="pb-3" />
              <button
                onClick={handleSendOtp}
                className="px-4 py-2 bg-yellow-400 font-semibold rounded hover:bg-yellow-500"
              >
                SEND OTP
              </button>
              {error && <p className="text-red-500">{error}</p>}
              <div className="flex flex-col items-center cursor-pointer mt-3" onClick={handleSwitching}>
                <p className="text-sm w-32">Use Other Methods</p>
                <div className="w-36 border-t border-dotted border-black"></div>
              </div>
            </div>
          )}

          {otpSent && !otpVerified && (
            <div className="flex flex-col items-center p-4 bg-white w-full">
              <div className="flex flex-col mb-4 justify-center items-center">
                <h2 className="text-lg font-semibold">Almost There!</h2>
                <p className="text-sm">Please enter OTP sent to the given number</p>
              </div>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 w-full"
              />
              <button
                onClick={handleVerifyOtp}
                className="px-4 py-2 mb-4 bg-yellow-400 rounded font-semibold hover:bg-yellow-500 w-full"
              >
                VERIFY OTP
              </button>
              {error && <p className="text-red-500">{error}</p>}
              <div className="text-center">
                <p className="text-sm">Didn't receive the OTP? <span className="text-blue-500 cursor-pointer" onClick={handleSendOtp}>Resend OTP</span></p>
              </div>
            </div>
          )}

          {otpVerified && (
            <div className="flex flex-col items-center p-4 bg-white shadow-md rounded">
              <h2 className="text-lg font-semibold mb-4">Login Successful</h2>
              <p>Welcome back!</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Otp;
