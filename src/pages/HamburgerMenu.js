import React, { useState } from "react";
import "./css/HamburgerMenu.css";

const HamburgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div class={`nav-links ${showMenu ? "show" : ""}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/skills">Skills</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="hamburger-menu" onClick={() => setShowMenu(!showMenu)}>
        <div className="hamburger-menu__line"></div>
        <div className="hamburger-menu__line"></div>
        <div className="hamburger-menu__line"></div>
      </div>
    </>
  );
};

export default HamburgerMenu;
