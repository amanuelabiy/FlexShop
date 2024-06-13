import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "cartItemAdded":
      return { ...state, cart: [...state.cart, action.payload] };
    case "cartItemRemove":

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    // const exists = state.cart.some((item) => item.id === product.id);
    // if (!exists) {
    //   const cartProduct = { ...product, cartValue: 1 };
    //   dispatch({ type: "cartItemAdded", payload: cartProduct });
    // } else {
    //   const cartProduct = { ...product, cartValue: 1 };
    //   dispatch({ type: "cartItemAdded", payload: });
    // }

    dispatch({ type: "cartItemAdded", payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: "cartItemRemove", payload: product });
  };

  console.log(state.cart);

  return (
    <CartContext.Provider
      value={{ cart: state.cart, addToCart, removeFromCart }}
    >
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
