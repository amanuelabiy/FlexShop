import React from "react";
import { Link } from "react-router-dom";

export const ContinueBtn = () => {
  return (
    <Link to="/">
      <button className="continue-btn">Continue Shopping</button>
    </Link>
  );
};
