import React from "react";
import { useState } from "react";
import { useCart } from "../cart/CartContent";

export const AddButton = ({ product }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const handleClick = () => {
    setAddedToCart(true);

    if (!addedToCart) {
      addToCart(product);
    }

    setTimeout(() => {
      setAddedToCart(false);
    }, 1000);
  };

  return (
    <button
      className={`add-button ${addedToCart ? "added-to-cart" : ""}`}
      onClick={handleClick}
    >
      <span>{addedToCart ? "Added to Cart" : "Add to Cart"}</span>
    </button>
  );
};
