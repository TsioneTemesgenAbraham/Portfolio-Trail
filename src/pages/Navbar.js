import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import "./css/HamburgerMenu.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar" showMenu={showMenu} setShowMenu={setShowMenu}>
          <HamburgerMenu />
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
