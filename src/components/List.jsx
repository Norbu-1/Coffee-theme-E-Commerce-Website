import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Blog from "./Blog";
import ProductList from "./section";
import LoadingSpinner from "./LoadingSpinner";

const List = () => {
  const [data, setData] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState({
    title: "Black Coffee",
    description:
      "Black coffee is as simple as it gets with ground coffee beans soaked in hot water, served hot. And if you want to sound fancy, you can call black coffee by its proper name: café noir.",
    ingredients: ["Coffee"],
    image:
      "https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 1,
  }); // Changed initial value to null
  const location = useLocation(); // Get current location

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        setData(items[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    return () => {
      controller.abort();
    };
  }, []);

  const handleBlog = (id) => {
    const selected = data.find((item) => item.id === id);
    setSelectedBlog(selected);
  };

  return (
    <div className={`${location.pathname === "/Blog" ? "pt-28" : ""}`}>
      {/* Render Blog component only when in the root path */}
      {location.pathname === "/Blog" && selectedBlog && (
        <Blog item={selectedBlog} />
      )}
      <p className="w-auto mx-auto flex justify-center">
        {!data ? (
          <LoadingSpinner />
        ) : (
          <ProductList data={data} handleBlog={handleBlog} />
        )}
      </p>
    </div>
  );
};

export default List;
