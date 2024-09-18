import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Otp from "./Otp";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showOtp, setShowOtp] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const HandleSwitching = () => {
    setShowOtp(true);
  };
  return (
    <>
      {showOtp ? (
        <Otp />
      ) : (
        <div className=" w-[100%] h-auto bg-white p-6 flex flex-col">
          <form action="" className=" w-full flex flex-col">
            <div className="flex gap-8 text-gray-500 items-center text-md">
              <MdEmail className=" text-2xl" />
              <input
                type="email"
                name="email"
                id="em1"
                placeholder="Email"
                className="p-1 w-full border-none focus:outline-none focus:ring-0 bg-white"
              />
            </div>
            <hr className="pb-6" />
            <div className="flex gap-8 text-gray-500 items-center text-md relative">
              <RiLockPasswordFill className="text-2xl" />
              <input
                type={showPassword ? "text" : "password"}
                name="pass"
                id="pass1"
                placeholder="Password"
                className="p-1 w-full border-none focus:outline-none focus:ring-0 relative"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <hr className="pb-6" />
            <div className="flex justify-between text-sm">
              <p className="text-center ">
                Remember me <input type="checkbox" name="chk" id="chk" />
              </p>
              <p className="pb-6">Forgot Password?</p>
            </div>

            <button className="w-full h-auto pt-1.5 pb-1.5 rounded-md bg-yellow-400 text-sm">
              LOGIN
            </button>
          </form>
          <div className="flex flex-col justify-center items-center pt-3 pb-3 relative w-full">
            <div className="flex items-center w-full">
              <div className="flex-grow border-t border-dotted border-black"></div>
              <span className="text-sm mx-2">Or Using</span>
              <div className="flex-grow border-t border-dotted border-black"></div>
            </div>
            <div className="pt-3 w-full">
              <button className="flex items-center justify-center p-1.5 gap-5 text-sm rounded-md border w-full">
                <FcGoogle className="text-2xl" /> GOOGLE
              </button>
            </div>
          </div>

          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={HandleSwitching}
          >
            <p className="text-sm w-32">Use Mobile Number</p>
            <div className="w-36 border-t border-dotted border-black"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
