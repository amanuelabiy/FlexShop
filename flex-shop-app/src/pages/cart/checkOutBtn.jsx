import React from "react";
import { Link } from "react-router-dom";

export const CheckOutBtn = ({ handleClick }) => {
  return (
    <Link to="/">
      <button className="checkout-btn" onClick={handleClick}>
        Checkout
      </button>
    </Link>
  );
};
