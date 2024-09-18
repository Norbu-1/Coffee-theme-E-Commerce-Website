import React, { useState } from "react";
import { FaRupeeSign, FaCartPlus } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/actions.jsx";
import axios from "axios"; // Import axios

const Blog = ({ item }) => {
  console.log(item);
  const [reviews, setReviews] = useState([]);
  const [newRating, setNewRating] = useState(0);
  const dispatch = useDispatch();

  const handleRatingSubmit = () => {
    if (newRating) {
      const review = {
        rating: newRating,
        id: reviews.length + 1,
      };
      setReviews([...reviews, review]);
      setNewRating(0);
    }
  };

  const averageRating = reviews.length
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0;

  const handleAddToCart = async () => {
    try {
      const authToken = localStorage.getItem('token'); // Get the auth token from local storage
      const response = await axios.post(
        'http://localhost:5000/api/cart/add', // Adjust the URL to your backend API
        { productId: item._id, quantity: 1 },
        // console.log(item,_id)
        { headers: { Authorization: `Bearer ${authToken}` } }
      );
      dispatch(addToCart(item));
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className="w-full mx-auto ">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-center items-center bg-white mt-8 py-8 rounded-md md:gap-20 text-red-900">
        <div>
          <img
            src={item.image}
            className="w-[25rem] h-[30rem] rounded-md mb-8 md:mb-0"
            alt={item.title}
          />
        </div>
        <div className="w-[80%] md:w-[50%] relative">
          <h1 className="text-4xl font-bold font-serif mb-6">{item.title}</h1>
          <p className="text-xl font-semibold flex items-center mb-4 ">
            <FaRupeeSign className="text-lg" /> {item.price} / 300ml
          </p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold ">Description -</h2>
            <p>{item.description}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mr-4">Ingredients -</h2>
            <ul className="flex">
              {item.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient} |</li>
              ))}
            </ul>
          </div>
          <div className="mb-4 font-semibold">
            <h2 className="text-xl font-semibold">Rating -</h2>
            <p className="flex items-center gap-1">
              <CiStar className="<CiStar /> font-bold text-xl" />
              {averageRating.toFixed(1)} / 5 ({reviews.length} ratings)
            </p>
          </div>
          <div className="flex w-auto">
            <select
              className="w-40 h-10 pl-2 border rounded-l-md font-semibold"
              value={newRating}
              onChange={(e) => setNewRating(parseInt(e.target.value))}
            >
              <option value="0">Rate It</option>
              {[1, 2, 3, 4, 5].map((rating) => (
                <option key={rating} value={rating}>
                  {rating}
                </option>
              ))}
            </select>
            <button
              className="bg-green-500 px-2 py-2 rounded-r-md font-semibold"
              onClick={handleRatingSubmit}
            >
              Add
            </button>
          </div>
          <div className="w-40 flex justify-center items-center mt-6 rounded-md bg-green-500">
            <button className="font-bold px-4 py-2" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <FaCartPlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
