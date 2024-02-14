import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import "./css/HamburgerMenu.css";

const Navbar = () => {
  // const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="Ap">
      <header className="App-header">
        <HamburgerMenu />
        {/* <div className="hamburger-icon">☰</div> */}
      </header>
    </div>
  );
};

export default Navbar;
