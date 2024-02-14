import React from "react";
import Portfolio from "./Portfolio";
import Navbar from "./Navbar";
import "./css/HamburgerMenu.css";

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="intro-1">
          <h3>
            <span>Hello there, I'm </span>
            <h1>
              <span>Tsione T Abraham, </span>
            </h1>
          </h3>
          <p>
            {" "}
            A Full-Stack Developer/ Front End Developer/ Back End Developer. I
            specialize in creating websites that are not only visually stunning
            but also user-friendly and functional.
          </p>
          <button>Contact me!</button>
        </div>
        <div className="intro-2">.</div>
      </div>
    </div>
  );
};

export default Home;
