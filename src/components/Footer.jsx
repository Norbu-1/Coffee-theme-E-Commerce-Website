import React from "react";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="flex justify-evenly w-[95%] mx-auto py-7 my-6 md:px-40 bg-yellow-300 rounded-xl text-red-950 ">
        <div className="flex flex-col items-center text-lg font-semibold">
          <h3 className="font-bold">Read More</h3>
          <p className="w-32 text-center mx-auto h-0.5 bg-black"></p>
          <Link className="hover:bg-white px-2 rounded-lg mt-2" to="/Blog">
            Blog
          </Link>
          <Link className="hover:bg-white px-2 rounded-lg" to="/Blog">
            Items
          </Link>
          <Link className="hover:bg-white px-2 rounded-lg" to="/About">
            About Us
          </Link>
          <Link className="hover:bg-white px-2 rounded-lg" to="/Contact">
            Contact Us
          </Link>
          
        </div>

        <div className="text-lg text-center">
          <h3 className="font-bold">Get In Touch</h3>
          <p className="w-32 text-center mx-auto h-0.5 bg-black"></p>
          <div className="flex flex-row text-2xl md:text-4xl gap-5 justify-center mt-4">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="py-8 w-[95%] text-sm md:text-md mx-auto font-semibold">
        © 2024 www.caffeinehub.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
