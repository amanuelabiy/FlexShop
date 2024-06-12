import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "cartItemAdded":
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "cartItemAdded", payload: product });
  };

  return (
    <CartContext.Provider value={{ cart: state.cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
