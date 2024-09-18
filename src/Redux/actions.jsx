// Action Types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
// Action Creators
export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    };
};

  
  export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    payload: { id },
  });

  export const login = (user) => ({
    type: "LOGIN",
    payload: user,
  });
  
  export const logout = () => ({
    type: "LOGOUT",
  });
  