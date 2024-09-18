import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Blog from "./Blog";
import ProductList from "./section";
import LoadingSpinner from "./LoadingSpinner";

const List = () => {
  const [data, setData] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const handleBlog = (id) => {
    const selected = data.find((item) => item.id === id);
    setSelectedBlog(selected);
    
  };

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    if (selectedBlog && location.pathname === "/List") {
      scrollToTop();
    }
  }, [selectedBlog, location.pathname]);

  return (
    <div className={`${location.pathname === "/List" ? "pt-16" : ""}`}>
      {location.pathname === "/" || (location.pathname === "/List" && selectedBlog) && (
        <Blog item={selectedBlog} />
      )}
      <p className="w-auto mx-auto flex justify-center">
        {!data.length ? (
          <LoadingSpinner />
        ) : (
          <ProductList data={data} handleBlog={handleBlog} />
        )}
      </p>
    </div>
  );
};

export default List;
