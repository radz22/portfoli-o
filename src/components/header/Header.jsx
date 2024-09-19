import React, { useState } from "react";
import "../header/Header.css";
import ablogo from "../../assets/ab logo 1.png";
import logowhite from "../../assets/ablogowhite 1.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCLose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-parent">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <div>
          <img src={ablogo} />
        </div>
        <Link to="/graphics">Graphics</Link>
        <Link to="/painting">Paintings</Link>
      </div>
      <div className="mobile">
        <div className="mobile-hamburger">
          <div onClick={handleOpenCLose} className="mobile-hamburger-menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 48 48"
              className="hamburger"
            >
              <rect width="48" height="48" fill="none" />
              <g
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
              >
                <path d="M7.94971 11.9497H39.9497" />
                <path d="M7.94971 23.9497H39.9497" />
                <path d="M7.94971 35.9497H39.9497" />
              </g>
            </svg>
          </div>
        </div>

        <div>
          {isOpen && (
            <div className="modal">
              <div className="close-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="close"
                  onClick={handleOpenCLose}
                >
                  <rect width="24" height="24" fill="none" />
                  <path
                    fill="currentColor"
                    d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
                  />
                </svg>
              </div>
              <div className="modal-content">
                <div>
                  <img src={logowhite} />
                </div>

                <div className="modal-content-link">
                  <Link to="/">Home</Link>
                </div>
                <div className="modal-content-link">
                  <Link to="/about">About</Link>
                </div>
                <div className="modal-content-link">
                  <Link to="/graphics">Graphics</Link>
                </div>

                <div className="modal-content-link">
                  <Link to="/painting">Paintings</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
