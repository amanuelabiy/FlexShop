import React from "react";
import { Product } from "./product";
import { uid } from "uid";
import "./shop.css";

import { memo } from "react";

export const Shop = ({ products }) => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product key={uid()} product={product} />
      ))}
    </div>
  );
};
