import React from "react";
// components
import Button from "./smallComponents/Button";
//images
import hero from "../images/hero.png";
const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="col">
          <img src={hero} alt="hero img" className="hero-img" />
        </div>
        <div className="hero-text ">
          <h1>enchant your home</h1>
          <h2>with a scents from Saint-Petersburg</h2>
          <Button text="SHOP NOW" classCSS='button' link='/shop'/>
        </div>
      </div>
    </>
  );
};

export default Hero;
