import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate, useLocation } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";

const ProductList = ({ data, handleBlog }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleRead = (id) => {
    handleBlog(id);
    navigate("/List");
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

  // Filter data based on search query
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  // Effect to scroll to the top when navigating to "/List"
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (location.pathname === "/List") {
      scrollToTop();
    }
  }, [location.pathname]);

  // Render slides individually
  const renderSlides = () => {
    return filteredData.map((item) => (
      <div
        className="bg-white rounded-lg mb-6 md:w-54 shadow-lg font-serif"
        key={item.id}
      >
        <p>
          <img
            className="rounded-t-lg hover:object-cover h-72 w-full"
            src={item.image}
            alt={item.title}
          />
        </p>
        <h1 className="text-lg pl-2 md:text-xl w-full font-semibold py-2 text-black">
          {item.title}
        </h1>
        <p className="flex pb-3 justify-between w-full px-2">
          <span className="text-lg font-semibold text-black flex items-center">
            <FaRupeeSign /> {item.price}
          </span>
        </p>
        <div>
          <button
            className="w-full py-1.5 rounded-b-md font-semibold bg-green-500"
            onClick={() => handleRead(item.id)}
          >
         {location.pathname==="/List"?  <p>Shop Now</p>:<p> Read More</p>}  
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="my-8 w-[90%] mx-auto">
      
      {location.pathname === "/List" ? (
        <div>
          <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className="w-full p-2 mb-8 border rounded"
      />
       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full justify-center gap-6">
          {renderSlides()}
        </div>
        </div>
        // Render all slides individually instead of using Slider component
       
      ) : (
        // Render Slider component
        <Slider {...settings}>{renderSlides()}</Slider>
      )}
    </div>
  );
};

export default ProductList;
