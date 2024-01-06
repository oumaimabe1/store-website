import React, { createContext, useContext, useReducer } from 'react';
const CartContext = createContext();
const cartActionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product) => {
    console.log('Adding to cart:', product);
    dispatch({ type: cartActionTypes.ADD_TO_CART, payload: product });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;