import React from "react";
import Portfolio from "./Portfolio";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
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
    </>
  );
};

export default Home;
