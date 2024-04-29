import { useState } from "react";
import { IoPersonOutline, IoClose, IoMenu } from "react-icons/io5";
import image1 from "../assets/istock2.jpg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(true);
  };
  const handleClose = () => {
    setMenu(false);
  };
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-yellow-500 flex justify-between items-center px-8  py-7 text-red-950 order-99 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-50 ">
        <h1 className=" font-bold font-serif text-2xl">CaffeineHub.</h1>
        <div className=" flex items-center font-bold text-white ">
          <ul className=" md:flex md:items-center font-bold text-white text-lg hidden">
            <li className="mx-5">
              {" "}
              <Link
                to="/"
                className="group relative inline-block cursor-pointer hover:text-slate-500"
              >
                Home
                <span className=" absolute inset-x-0 bottom-0 h-0.5 transform origin-left scale-x-0 transition-transform bg-black w-10 group-hover:scale-x-125"></span>
              </Link>
            </li>
            <li className="mx-5">
              <Link
                to="/Blog"
                className="group relative inline-block cursor-pointer hover:text-slate-500"
              >
                Blog
                <span className=" absolute inset-x-0 bottom-0 h-0.5 transform origin-left scale-x-0 transition-transform bg-black w-10 group-hover:scale-x-100"></span>
              </Link>
            </li>
            <li className="mx-5">
              <Link
                to="/About"
                className="group relative inline-block cursor-pointer hover:text-slate-500"
              >
                About Us
                <span className=" absolute inset-x-0 bottom-0 h-0.5 transform origin-left scale-x-0 transition-transform bg-black w-10 group-hover:scale-x-125"></span>
              </Link>
            </li>
            <li className="mx-5">
              <Link
                to="/Contact"
                className="group relative inline-block cursor-pointer hover:text-slate-500"
              >
                Contact Us
                <span className=" absolute inset-x-0 bottom-0 h-0.5 transform origin-left scale-x-0 transition-transform bg-black w-10 group-hover:scale-x-125"></span>
              </Link>
            </li>
          </ul>
          
          <div className="md:hidden">
            <p className="text-black text-2xl cursor-pointer">
              {menu ? (
                <IoClose onClick={handleClose} />
              ) : (
                <IoMenu onClick={handleChange} />
              )}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${
          menu ? "translate-x-0" : "translate-x-full"
        } md:hidden flex-col flex text-center items-center fixed right-0 top-[5.45rem] font-bold text-white pt-6 h-[100vh] w-[50vw]  bg-white duration-[1s] z-50 `}
      >
        <div className="bg-yellow-500 rounded-md w-[45vw] pt-8 h-full shadow-xl">
          <ul className=" font-bold text-white text-lg">
            <li className="pb-4">
              <Link
                to="/"
                className="group relative inline-block cursor-pointer hover:text-slate-500"
              >
                Home
                <span className=" absolute inset-x-0 bottom-0 h-0.5 transform origin-left scale-x-0 transition-transform bg-black w-10 group-hover:scale-x-125"></span>
              </Link>
            </li>
            <li className="pb-4">
              <Link
                to="/Blog"
                className="group relative inline-block cursor-pointer hover:text-slate-500"
              >
                Blog
                <span className=" absolute inset-x-0 bottom-0 h-0.5 transform origin-left scale-x-0 transition-transform bg-black w-10 group-hover:scale-x-100"></span>
              </Link>
            </li>
            <li className="pb-4">
              <Link
                to="/About"
                className="group relative inline-block cursor-pointer hover:text-slate-500"
              >
                About Us
                <span className=" absolute inset-x-0 bottom-0 h-0.5 transform origin-left scale-x-0 transition-transform bg-black w-10 group-hover:scale-x-150"></span>
              </Link>
            </li>
            <li className="pb-4">
              <Link
                to="/Contact"
                className="group relative inline-block cursor-pointer hover:text-slate-500"
              >
                Contact Us
                <span className=" absolute inset-x-0 bottom-0 h-0.5 transform origin-left scale-x-0 transition-transform bg-black w-10 group-hover:scale-x-[230%]"></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
