import "./App.css";
import { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { About } from "./pages/about/about";
import { Contact } from "./pages/contact/contact";
import { SignIn } from "./pages/signIn/signIn";
import { Error } from "./pages/shop/error";
import { Loading } from "./pages/shop/loading";

import { Navbar } from "./components/navbar";

const initialState = {
  products: [],
  cart: [],
  user: null,
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "productFetchError":
      return { ...state, status: "productFetchError" };
    case "productFetchSuccess":
      return { ...state, status: "productReceived", products: action.payload };
    case "cartItemAdded":
      return { ...state, cart: [...state.cart, action.payload] };
  }
}

function App() {
  const [{ products, cart, user, status }, dispatch] = useReducer(
    reducer,
    initialState
  );

  console.log(products);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "productFetchSuccess", payload: data }))
      .catch((err) => dispatch({ type: "productFetchError" }));
  }, []);

  const addToCart = (product) => {
    dispatch({ type: "cartItemAdded", payload: product });
    console.log(product);
  };

  return (
    <div className="App">
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
                <Shop products={products} addToCart={addToCart} />
              )
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
