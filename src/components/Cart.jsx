import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {  removeItem } from "../Redux/actions";

const Cart = () => {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem("token");
        if (!authToken) throw new Error("No token found");

        // Fetch user details
        const userResponse = await axios.get(
          "http://localhost:5000/api/users/me",
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        );
        console.log("user",userResponse.data)
        setUserDetails(userResponse.data);
        setAddress(userResponse.data.address);

        // Fetch cart items
        const cartResponse = await axios.get("http://localhost:5000/api/cart", {
          headers: { Authorization: `Bearer ${authToken}` },
        });
        // const productResponse = await axios.get('http://localhost:5000/api/products');
        // const products = productResponse.data;

        // Map product details to cart items
        const cartItemsWithDetails = cartResponse.data.items.map((item) => {
          return Object.values(item);
        });

        console.log("q", cartItemsWithDetails);
        setCartItems(cartItemsWithDetails);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };

    fetchData();
  }, []);

  const handleQuantityChange = async (id, quantity) => {
    try {
      const authToken = localStorage.getItem("token");

      if (quantity <= 0) {
        dispatch(removeItem(id));
        // Remove item from backend and local state
        await axios.post(
          "http://localhost:5000/api/cart/remove",
          { productId: id, quantity: -quantity },
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        );
        setCartItems(cartItems.filter((item) => item[0]._id !== id));
      } else {
        // Update quantity in backend
        await axios.put(
          "http://localhost:5000/api/cart/update",
          { productId: id, quantity },
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        );
        // Update local state
        setCartItems(
          cartItems.map((item) =>
            item[0]._id === id ? [item[0], quantity] : item
          )
        );
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  



  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item[0].price * item[1],
    0
  );
  const tax = totalPrice * 0.2;
  const discountAmount = totalPrice * 0.1;
  const finalTotal = totalPrice + tax - discountAmount;

  return (
    <div className="w-full h-full mx-auto my-16 p-6 font-serif">
      {/* {error && <p className="text-red-500">{error}</p>} */}
      {cartItems.length===0? <p className="text-center text-2xl text-red-900 font-semibold mb-4">Cart is Empty !</p>:" "
      }
      <div className="flex justify-between mb-4 flex-col md:flex-row">
        <div className="w-full md:w-[50%] bg-gray-100 p-4 rounded-l-sm">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">User Logged In As</h3>
            <p>
              {userDetails.username} | {userDetails.phoneNumber}
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Delivery Address</h3>
            
              <div>
               
                <div className="font-semibold  text-md flex font">Pincode : <p className=" font-normal pl-2">{address.pincode}</p></div>
                <div className="font-semibold  text-md flex">Area : <p className="font-normal pl-2">{address.area}</p></div>

                <div className="font-semibold  text-md flex">Building / House no / Flat : <p className="font-normal pl-2">{address.flatOrBuilding}</p></div>
                 
              </div>
            
          </div>
        </div>
        <div className="w-full md:w-[60%] bg-white p-4 rounded-r-sm shadow">
          <h3 className="text-xl font-semibold mb-4 font-serif">
            Order Summary
          </h3>
          {cartItems.map((item) => (
            <div key={item[0].id} className="flex items-center mb-4">
              <img
                src={item[0].image}
                alt={item[0].title}
                className="w-28 h-20 object-cover mr-8"
              />
              <div className="w-full">
                <p className="text-lg font-semibold font-serif mb-2">
                  {item[0].title}
                </p>
                <div className="flex w-full justify-between">
                  <p className="font-semibold">
                    {item[1]} x ₹{item[0].price}
                  </p>
                  <div className="flex items-center border justify-between">
                    <button
                      onClick={() =>
                        handleQuantityChange(item[0]._id, item[1] - 1)
                      }
                      className="text-green-600 px-2 font-bold"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item[1]}
                      min="1"
                      onChange={(e) =>
                        handleQuantityChange(item[0]._id, e.target.value)
                      }
                      className="w-16 pl-3 text-center mx-2"
                    />
                    <button
                      onClick={() =>
                        handleQuantityChange(item[0]._id, item[1] + 1)
                      }
                      className="text-green-600 font-bold px-2"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between font-semibold border-t pt-4">
            <p className="font-bold font-serif text-lg">Total</p>
            <p>₹{totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex justify-between font-semibold border-t pt-4">
            <p className="font-bold font-serif text-lg">
              GST and Restaurant Charges (20%)
            </p>
            <p>₹{tax.toFixed(2)}</p>
          </div>
          <div className="flex justify-between font-semibold border-t pt-4">
            <p className="font-bold font-serif text-lg">Discount Amount</p>
            <p>₹{discountAmount.toFixed(2)}</p>
          </div>
          <div className="flex justify-between font-semibold border-t pt-4">
            <p className="font-bold font-serif text-lg">Grand Total</p>
            <p>₹{finalTotal.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded">
        <h3 className="text-xl font-semibold mb-2 p-2">
          Choose payment method
        </h3>
        <button className="bg-green-500 text-white p-2 rounded w-full">
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default Cart;
