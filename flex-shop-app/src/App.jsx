import "./App.css";
import React, { useEffect, useReducer, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { About } from "./pages/about/about";
import { Contact } from "./pages/contact/contact";
import { SignIn } from "./pages/signIn/signIn";
import { Error } from "./pages/shop/error";
import { Loading } from "./pages/shop/loading";
import { CartProvider } from "./pages/cart/CartContent";
import { ContinueBtn } from "./pages/cart/continueBtn";

import { Navbar } from "./components/navbar";

const initialState = {
  products: [],
  // cart: [],
  // user: null,
  status: "loading",
};

function shopReducer(state, action) {
  switch (action.type) {
    case "productFetchError":
      return { ...state, status: "productFetchError" };
    case "productFetchSuccess":
      return { ...state, status: "productReceived", products: action.payload };
    // case "cartItemAdded":
    //   return { ...state, cart: [...state.cart, action.payload] };
    default:
      throw new Error("Unknown Action");
  }
}

function App() {
  const [{ products, status }, dispatch] = useReducer(
    shopReducer,
    initialState
  );

  console.log(products);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "productFetchSuccess", payload: data }))
      .catch((err) => dispatch({ type: "productFetchError" }));
  }, []);

  // const addItemToCart = (product) => {
  //   dispatch({ type: "cartItemAdded", payload: product });
  //   // console.log(product);
  // };

  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                status === "loading" ? (
                  <Loading />
                ) : status === "productFetchError" ? (
                  <Error />
                ) : (
                  <Shop products={products} />
                )
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signIn" element={<SignIn />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
