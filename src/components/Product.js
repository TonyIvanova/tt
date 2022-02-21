import React, { useState, useEffect } from "react";
//router
import { useParams } from "react-router-dom";
//components
import Button from "./smallComponents/Button";
import ButtonNoLink from "./smallComponents/ButtonNoLink";
//redux

import {useSelector, useDispatch} from 'react-redux'; 
import {added} from '../features/cart/cartSlice'; 





const Product = () => {
  //redux logic 
  const cart = useSelector((state) => state.cart.products); 
  const dispatch = useDispatch(); 
  const handleClick = () => {
    dispatch(added(1)); 
  }
  //page functionality
  const [size, setSize] = useState("B");

  

  //routing and fetching data
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      console.log(id);
      const response = await fetch(`http://localhost:3002/api/products/${id}`);
      const item = await response.json();

      setData(item);
      setLoading(false);
      return item;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (!loading) {
    const {
      title,
      id,
      price_big,
      price_small,
      price_medium,
      picture,
      contents,
      description,
    } = data[0];
    return (
      <>
        <div className="product">
          <div className="product-col">
            <div className="title-price">
              <p>{title} </p>
              <p>{price_big}$</p>
            </div>

            <img src={picture} alt="candle" className="product-image" />
          </div>
          <div className="product-col">
            <div className="description">
              <p>{contents}</p>
              <p>{description}</p>
              <br />
              <p>PICK YOUR SIZE</p>
              <div
                className="card-buttons"
                style={{ "margin-left": 0, "margin-right": 0 }}
                
              >
                 
                <ButtonNoLink
                  text={`Small ${price_small}$`}
                  classCSS={size==='S'? "button-size-picked" : "button-size"}
                 onClick={() => {
                    setSize('S');
                  }}
                />
                <ButtonNoLink
                  text={`Medium ${price_medium}$`}
                  classCSS={size==='M'? "button-size-picked" : "button-size"}
                  onClick={() => {
                    setSize('M');
                  }}
                />
                <ButtonNoLink
                  text={`Big ${price_big}$`}
                  classCSS={size==='B'? "button-size-picked" : "button-size"}
                  onClick={() => {
                    setSize('B');
                  }}
                />
              </div>
            </div>

            <Button
              text="BUY"
              link="/"
              classCSS="button "
              linkStyle="product-bottom"
              onClick={handleClick}
            />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="product">loading...</div>
      </>
    );
  }
};

export default Product;
