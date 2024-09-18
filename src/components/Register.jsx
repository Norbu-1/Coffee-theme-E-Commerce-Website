import React from "react";
import Login from "./Login";
import Otp from "./Otp";

const Register = () => {
  return (
    <div className="border border-none w-[95%] h-screen bg-white md:p-6 flex  mx-auto mt-16 relative top-3  items-center justify-center">
        <div className="flex flex-col justify-center items-center">
        {/* <p className='font-semibold text-2xl'>Register/Login As</p>
        <div>
            <p>EMPLOYEE</p>
            <p>CUSTOMER</p>
        </div> */}
        </div>
        
        <Otp/>
    </div>
  );
};

export default Register;
