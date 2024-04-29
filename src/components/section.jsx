import React, { useEffect, useState } from "react";
import { SlLike, SlDislike } from "react-icons/sl";
import LoadingSpinner from "./LoadingSpinner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate, useLocation } from "react-router-dom";

const ProductList = ({ data, handleBlog }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});

  const handleLike = (id) => {
    setLikes((prevLikes) => {
      const updatedLikes = { ...prevLikes };
      updatedLikes[id] = (updatedLikes[id] || 0) + 1;
      return updatedLikes;
    });
  };

  const handleDislike = (id) => {
    setDislikes((prevDislikes) => {
      const updatedDislikes = { ...prevDislikes };
      updatedDislikes[id] = (updatedDislikes[id] || 0) + 1;
      return updatedDislikes;
    });
  };

  const handleRead = (id) => {
    handleBlog(id);
    navigate("/Blog");
    alert("Scroll to the top !!")
  };

  // Function to calculate the number of slides to show based on screen width
  const calculateSlidesToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 500) {
      return 1; // Show 1 slide on smaller screens
    } else if (screenWidth < 1024) {
      return 3; // Show 3 slides on medium screens
    } else {
      return 5; // Show 5 slides on larger screens
    }
  };

  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: calculateSlidesToShow(),
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    style: { zIndex: 0 },
  };

  // Render slides individually
  const renderSlides = () => {
    return data.map((item, index) => {
      const productLikes = likes[item.id] || 0;
      const productDislikes = dislikes[item.id] || 0;
      return (
        <div
          className="bg-yellow-500 rounded-lg my-6 md:w-60  shadow-lg mx-6"
          key={item.id}
        >
          <p>
            <img
              className="rounded-t-lg hover:object-cover h-72 w-full"
              src={item.image}
              alt=""
            />
          </p>
          <h1 className="text-md pl-2 md:text-xl w-full font-semibold py-2 text-black">
            {item.title}.
          </h1>
          <p className="flex pb-3 justify-between w-full px-2">
            <button
              className="flex items-center gap-2 font-semibold "
              onClick={() => handleLike(item.id)}
            >
              <SlLike />
              <span>{productLikes}</span>
            </button>
            <button
              className="flex items-center gap-2 font-semibold"
              onClick={() => handleDislike(item.id)}
            >
              <SlDislike />
              <span>{productDislikes}</span>
            </button>
          </p>
          <div>
            <button
              className="w-full py-1.5 rounded font-semibold bg-yellow-300"
              onClick={() => handleRead(item.id)}
            >
              Read More
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="my-8 w-[90%] px-4">
      {location.pathname === "/Blog" ? (
        // Render all slides individually instead of using Slider component
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full">
          {renderSlides()}
        </div>
      ) : (
        // Render Slider component
        <Slider {...settings}>{renderSlides()}</Slider>
      )}
    </div>
  );
};

export default ProductList;
