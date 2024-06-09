import React from "react";
import { Rating } from "./starrating";
import { AddButton } from "./addbutton";

export const Product = ({ product, addToCart }) => {
  const price = product.price;

  return (
    <div className="product">
      <img className="product-image" src={product.image}></img>
      <p className="product-name">{product.name}</p>
      <Rating rating={product.rating} />
      <p className="product-price">{`$${price.toFixed(2)}`}</p>
      <AddButton addToCart={addToCart} product={product} />
    </div>
  );
};
