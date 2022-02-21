import React from "react";
//components
import Button from "./Button";
const Card = ({ title, id, price_big, picture, contents }) => {
  return (
    <>
      <div className="product-card">
        <div className="title-price">
          <p>{title}</p>
          <p> {price_big}$</p>
        </div>

        <img src={picture} alt="candle" className="card-image" />
        <div className="card-contents">
          <p>{contents}</p>
        </div>

        <div className='card-buttons'>
          
          <Button classCSS="button-small" text="ABOUT" link={`/products/${id}`} />
          <Button classCSS="button-small" text="BUY" link='/'/>
        </div>
      </div>
    </>
  );
};

export default Card;
