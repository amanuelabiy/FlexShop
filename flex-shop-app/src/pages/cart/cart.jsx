import React from "react";
import "./cart.css";
import { useCart } from "./CartContent";
import { CartProduct } from "./cartproduct";
import { ContinueBtn } from "./continueBtn";
import { CheckOutBtn } from "./checkOutBtn";
import { uid } from "uid";

export const Cart = () => {
  const { cart } = useCart();

  const countOccurrences = (cart, cartItem) => {
    let count = 0;
    for (let item of cart) {
      if (JSON.stringify(item) === JSON.stringify(cartItem)) {
        count++;
      }
    }

    return count;
  };

  const totalPrice = cart.reduce(
    (total, cartProduct) => total + cartProduct.price,
    0.0
  );

  const addCartValue = (cart) => {
    return cart.map((cartItem) => {
      const cartValue = countOccurrences(cart, cartItem);

      return {
        ...cartItem,
        cartValue: cartValue,
      };
    });
  };

  const productsWithCartValue = addCartValue(cart);

  const uniqueProducts = new Set();

  const individualProducts = productsWithCartValue.filter((product) => {
    if (!uniqueProducts.has(product.name)) {
      uniqueProducts.add(product.name);
      return true;
    }
    return false;
  });

  const handleClick = () => {
    for (let product of individualProducts) {
      console.log(product);
    }
  };

  return (
    <div className="cart-container">
      <h1 className="your-cart-text">Your Cart:</h1>
      {individualProducts.map((cartProduct) => (
        <CartProduct
          key={uid()}
          cartProduct={cartProduct}
          individualProducts={individualProducts}
        />
      ))}
      <p className="total-price">Total Price: {totalPrice.toFixed(2)}</p>
      <div className="buttons-container">
        <ContinueBtn />
        <CheckOutBtn handleClick={handleClick} />
      </div>
    </div>
  );
};
