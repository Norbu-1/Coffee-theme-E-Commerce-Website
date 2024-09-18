import { ADD_TO_CART } from "./actions.jsx";
import {  REMOVE_ITEM } from "./actions.jsx";
const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default cartReducer;
