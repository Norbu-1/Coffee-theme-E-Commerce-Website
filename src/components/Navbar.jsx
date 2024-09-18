import React, { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { RiAccountPinCircleLine } from 'react-icons/ri';
import { BsCartPlus } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT } from '../Redux/actions'; // Adjust import path

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart) || [];
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMenuChange = () => {
    setMenu(!menu);
  };
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
  };
  const cartCount = cartItems.length > 9 ? '9+' : cartItems.length;

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/login'); // Redirect to login page
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-yellow-500 flex justify-between items-center px-8 py-4 text-red-950 order-99 shadow-md z-50">
        <h1 className="font-bold font-serif text-2xl">CaffeineHub.</h1>
        <div className="flex items-center font-bold text-white">
          <ul className="md:flex md:items-center font-bold text-white text-lg hidden">
            <li className="mx-5">
              <Link
                to="/"
                className="group relative inline-block cursor-pointer hover:text-slate-500"
              >
                Home
              </Link>
            </li>
            <li className="mx-5">
              <Link
                to="/List"
                className="group relative inline-block cursor-pointer hover:text-slate-500"
              >
                Shop
              </Link>
            </li>
            <li className="mx-5">
              <Link
                to="/About"
                className="group relative inline-block cursor-pointer hover:text-slate-500"
              >
                About Us
              </Link>
            </li>
            <li className="mx-5">
              <Link
                to="/Contact"
                className="group relative inline-block cursor-pointer hover:text-slate-500"
              >
                Contact Us
              </Link>
            </li>
            <li className="mx-5 relative">
              <Link
                to="/Cart"
                className="group relative inline-block cursor-pointer hover:text-slate-500"
              >
                <BsCartPlus className="text-2xl text-center" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
            <li className="mx-5">
            <div className="relative">
      <div className="relative inline-block cursor-pointer" onClick={handleDropdownToggle}>
        <RiAccountPinCircleLine className="text-2xl text-center" />
      </div>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg py-1 z-20">
          {isLoggedIn ? (
            <>
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)} // Close dropdown on click
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setDropdownOpen(false)} // Close dropdown on click
            >
              Login
            </Link>
          )}
        </div>
      )}
    </div>
            </li>
          </ul>
          <div className="md:hidden mr-4">
            <Link
              to="/Cart"
              className="group relative inline-block cursor-pointer hover:text-slate-500"
            >
              <BsCartPlus className="text-xl text-center text-black" />
              {cartItems.length > 0 && (
                <span className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          <div className="md:hidden">
            <p className="text-black text-2xl cursor-pointer">
              {menu ? (
                <IoClose onClick={handleMenuChange} />
              ) : (
                <IoMenu onClick={handleMenuChange} />
              )}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${
          menu ? "translate-x-0" : "translate-x-full"
        } md:hidden flex-col flex text-center items-center fixed right-0 top-[4rem] font-bold text-white pt-6 h-[100vh] w-[50vw]  bg-white duration-[1s] z-50 `}
      >
        <div className="bg-yellow-500 rounded-md w-[45vw] pt-8 h-full shadow-xl">
          <ul className="font-bold text-white text-lg">
            <li className="pb-4">
              <Link
                to="/"
                className="group relative inline-block cursor-pointer hover:text-slate-500"
              >
                Home
              </Link>
            </li>
            <li className="pb-4">
              <Link
                to="/List"
                className="group relative inline-block cursor-pointer hover:text-slate-500"
              >
                Shop
              </Link>
            </li>
            <li className="pb-4">
              <Link
                to="/About"
                className="group relative inline-block cursor-pointer hover:text-slate-500"
              >
                About Us
              </Link>
            </li>
            <li className="pb-4">
              <Link
                to="/Contact"
                className="group relative inline-block cursor-pointer hover:text-slate-500"
              >
                Contact Us
              </Link>
            </li>
            <li className="pb-4">
            {isLoggedIn ? (
            <>
              <Link
                to="/profile"
                className="block px-4 text-lg text-white hover:text-gray-500"
                onClick={() => setDropdownOpen(false)} // Close dropdown on click
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="block  w-full md:text-left px-4  py-2 text-lg text-white hover:text-gray-500"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="block px-4 text-lg text-white hover:text-gray-500"
              onClick={() => setDropdownOpen(false)} // Close dropdown on click
            >
              Login
            </Link>
          )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
