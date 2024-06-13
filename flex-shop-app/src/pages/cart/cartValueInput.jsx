import React from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import { useCart } from "./CartContent";

export const CartValueInput = ({ value, cartProduct, individualProducts }) => {
  const { addToCart, cart, removeFromCart } = useCart();

  const handleAddingToCart = (cartProduct) => {
    for (let item of cart) {
      if (item.name === cartProduct.name) {
        const addedCopy = { ...item };
        addToCart(addedCopy);
        console.log("Added Copy: ", addedCopy);
        return null;
      }
    }
  };

  const handleRemovingCartItem = (cartProduct) => {
    for (let item of cart) {
      if (item.name === cartProduct.name) {
        const addedCopy = { ...item };
        removeFromCart(addedCopy);
        return null;
      }
    }
  };

  return (
    <div className="cart-value-input-container">
      <FaMinusSquare
        className="minus-btn"
        onClick={() => handleRemovingCartItem(cartProduct)}
      />
      <p className="cart-value-input" readOnly>
        {value}
      </p>
      <FaPlusSquare
        className="plus-btn"
        onClick={() => handleAddingToCart(cartProduct)}
      />
    </div>
  );
};
