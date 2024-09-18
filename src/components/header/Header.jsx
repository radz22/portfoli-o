import React from "react";
import "../header/Header.css";
import ablogo from "../../assets/ab logo 1.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-parent">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <div>
          <img src={ablogo} />
        </div>
        <Link to="/">Graphics</Link>
        <Link to="/">Paintings</Link>
      </div>
    </div>
  );
};

export default Header;
