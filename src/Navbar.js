import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./assets/logo.png";
import title from "./assets/title.jpeg";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        {/* <img className="title_logo" src={title} alt="title" /> */}
        <h1 className="title_logo">Kai Burmese Cuisine</h1>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#Menu" onClick={closeMenu}>
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a href="#About" onClick={closeMenu}>
              About
            </a>
          </li>
          {/* <li className="nav-item">
            <a href="#mainmenu" onClick={closeMenu}>
              Menu
            </a>
          </li> */}
          <li className="nav-item">
            <a href="#Contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
