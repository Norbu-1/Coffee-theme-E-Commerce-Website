import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Profile = () => {
  const [userDetails, setUserDetails] = useState({});
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState({
    pincode: '',
    area: '',
    flatOrBuilding: ''
  });
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/users/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserDetails(response.data);
        setUsername(response.data.username || '');
        setAddress(response.data.address || { pincode: '', area: '', flatOrBuilding: '' });
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleUpdateProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put('http://localhost:5000/api/users/update-profile', { username, address }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUserDetails(response.data);
      setEditMode(false);
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="w-[90%] mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      {editMode ? (
        <>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phone Number:</label>
            <p className="p-2 border border-gray-300 rounded bg-gray-100">{userDetails.phoneNumber}</p>
          </div>
          
          <div className="mb-4">
            <h1 className='text-xl font-semibold mb-2'> Enter Your Address</h1>
            <label className="block text-gray-700 mb-2">Pincode:</label>
            <input
              type="text"
              value={address.pincode}
              onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Area:</label>
            <input
              type="text"
              value={address.area}
              onChange={(e) => setAddress({ ...address, area: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Flat or Building:</label>
            <input
              type="text"
              value={address.flatOrBuilding}
              onChange={(e) => setAddress({ ...address, flatOrBuilding: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleUpdateProfile}
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
            >
              Update Profile
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="px-4 py-2 bg-gray-600 text-white font-semibold rounded hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Username:</label>
            <p className="p-2 border border-gray-300 rounded bg-gray-100">{userDetails.username}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phone Number:</label>
            <p className="p-2 border border-gray-300 rounded bg-gray-100">{userDetails.phoneNumber}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Pincode:</label>
            <p className="p-2 border border-gray-300 rounded bg-gray-100">{userDetails.address?.pincode}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Area:</label>
            <p className="p-2 border border-gray-300 rounded bg-gray-100">{userDetails.address?.area}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Flat or Building:</label>
            <p className="p-2 border border-gray-300 rounded bg-gray-100">{userDetails.address?.flatOrBuilding}</p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => setEditMode(true)}
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
            >
              Edit Profile
            </button>

          </div>
        </>
      )}
      <div className="flex space-x-4 mt-4">
      </div>
    </div>
  );
};

export default Profile;
