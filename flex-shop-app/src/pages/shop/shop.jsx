import React from "react";
import { Product } from "./product";
import { uid } from "uid";
import "./shop.css";

export const Shop = ({ products, addToCart }) => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product key={uid()} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};
