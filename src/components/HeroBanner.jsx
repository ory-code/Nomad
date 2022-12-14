import React from "react";
import "../styles/HeroBanner.css";
const HeroBanner = () => {
  return (
    <>
      <div className="hero-container">
        <video src="/videos/video-1.mp4" autoPlay loop muted />{" "}
        <h1>Welcome to the Nomad life !</h1>
        <p>What are you waiting for ?</p>
        <div className="hero-btns">
          <button className="btns btn--outline btn--large">GET STARTED</button>
          <button className="btns btn--primary btn--large">WHATCH TRAILER</button>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
