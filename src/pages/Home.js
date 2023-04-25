import React, { useState } from "react";
import Portfolio from "./Portfolio";
import HamburgerMenu from "./HamburgerMenu";

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar" showMenu={showMenu} setShowMenu={setShowMenu}>
          <HamburgerMenu />
        </nav>
      </header>

      <div>
        <h1>
          <span>Hi,</span>
          <br />
          <span>I'm Tsione, </span>
          <br />
          <span>web developer</span>
        </h1>
        <p>Full-Stack Developer/ Front End Developer/ Back End Developer </p>
        <button>Contact me!</button>
      </div>
      <Portfolio />
    </div>
  );
};

export default Home;
