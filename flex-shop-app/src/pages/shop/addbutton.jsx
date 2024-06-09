import React from "react";
import { useState } from "react";

export const AddButton = ({ addToCart, product }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleClick = () => {
    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 1000);
  };

  return (
    <button
      className={`add-button ${addedToCart ? "added-to-cart" : ""}`}
      onClick={() => {
        handleClick(), addToCart(product);
      }}
    >
      <span>{addedToCart ? "Added to Cart" : "Add to Cart"}</span>
    </button>
  );
};
