import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { ContactButton } from "./contactButton";
import { SignInButton } from "./signInButton";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <Link className="nav-title" to="/">
          FlexShop
        </Link>
        <Link className="nav-links" to="/">
          Shop
        </Link>
        <Link className="nav-links" to="/cart">
          Cart
        </Link>
        <Link className="nav-links" to="/about">
          About
        </Link>
        <ContactButton />
        <SignInButton />
      </nav>
    </div>
  );
};
