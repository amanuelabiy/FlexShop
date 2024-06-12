import React from "react";
import { Rating } from "../shop/starrating";

export const CartProduct = ({ cartProduct }) => {
  return (
    <div className="cart-product-container">
      <img className="cart-product-image" src={cartProduct.image} />
      <Rating rating={cartProduct.rating} />
      <p className="cart-product-price">${cartProduct.price.toFixed(2)}</p>
      <p>{cartProduct.cartValue}</p>
    </div>
  );
};
