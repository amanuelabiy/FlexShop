import React from "react";

export const CheckOutBtn = ({ handleClick }) => {
  return (
    <button className="checkout-button" onClick={handleClick}>
      Checkout
    </button>
  );
};
