import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const SignInButton = () => {
  return (
    <Link to="/signIn">
      <button className="navbar-btn">Sign In</button>
    </Link>
  );
};
