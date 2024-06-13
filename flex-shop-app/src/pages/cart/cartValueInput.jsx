import React from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";

export const CartValueInput = ({ value }) => {
  const sayHi = () => {
    console.log("hi");
  };

  return (
    <div className="cart-value-input-container">
      <FaMinusSquare className="minus-btn" />
      <p className="cart-value-input" readOnly>
        {value}
      </p>
      <FaPlusSquare className="plus-btn" />
    </div>
  );
};
