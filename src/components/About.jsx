import React from 'react';
import { useLocation } from 'react-router-dom';
import image1 from "../assets/bg.avif";

const About = () => {
  const location = useLocation();

  return (
    <div className="w-full px-10 py-6 text-center">
      {location.pathname === "/About" && (
        <img className='w-full h-[20rem] object-cover pt-20 relative mb-10' src={image1} alt="About Us" />
      )}
       {location.pathname === "/About" && (
         <h1 className="text-4xl font-semibold mb-6 md:absolute md:top-[25%] md:right-[20%] md:text-white">About Us</h1>
      )}
    
      {location.pathname !== "/About" && (
        <h1 className="text-4xl font-semibold mb-6 ">About Us</h1>
      )}
      <p className="text-lg mb-6">
        Welcome to our coffee world! This website is dedicated to practicing and showcasing frontend development skills, with a focus on creating delightful user experiences.
      </p>
      <p className="text-lg mb-6">
        While our primary goal is to provide you with an enjoyable browsing experience, please note that the content and products featured on this site are for demonstration purposes only.
      </p>
      <p className="text-lg mb-6">
        Thank you for visiting our practice website! We hope you enjoy exploring our coffee selections and experiencing the creativity and craftsmanship behind our frontend design.
      </p>
    </div>
  );
};

export default About;
