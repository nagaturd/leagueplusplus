import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1 className="navbar__logo">L++</h1>
      <ul className="navbar">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/champions">
          <li>Champions</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
