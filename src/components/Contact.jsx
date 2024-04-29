import React from "react";
import { useLocation } from "react-router-dom";
import image1 from "../assets/bg.avif";

const Contact = () => {
  const location = useLocation();

  return (
    <div className="w-full px-10 pb-6 text-center">
      {location.pathname === "/Contact" && (
        <img className='w-full h-[20rem] object-cover pt-24 relative mb-10' src={image1} alt="Contact Us" />
      )}
        {location.pathname === "/Contact" && (
      <h1 className="text-3xl font-semibold mb-6 md:absolute md:top-[25%] md:right-[20%] md:text-white ">Contact Us</h1>
      )}
       {location.pathname !== "/Contact" && (
        <h1 className="text-4xl font-semibold mb-6 ">Contact Us</h1>
      )}
      
      <p className="text-lg mb-6">
        We'd love to hear from you! Whether you have a question about our products, want to provide feedback, or just want to say hello, feel free to reach out to us.
      </p>
      <p className="text-lg mb-6">
        You can contact us via email at <a href="mailto:info@coffeeshub.com" className="text-blue-600">info@coffeehub.com</a> or by phone at <a href="tel:+919031234567" className="text-blue-600">+91 9031234567</a>.
      </p>
    </div>
  );
};

export default Contact;
