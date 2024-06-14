import React from "react";
import imageSrc from "../../../assets/cart_empty_sad_face.webp";
import { ContinueBtn } from "./continueBtn";

export const CartEmpty = () => {
  return (
    <div className="cart-empty-container">
      <img className="sad-face" src={imageSrc}></img>
      <h1 className="cart-empty-text">Your Cart is Currently Empty....</h1>
      <ContinueBtn />
    </div>
  );
};
