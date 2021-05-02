import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import './Home.css'

function Checkout({ id, title, image, price, rating }) {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();

  const remove = () => {
    // remove item from basket...
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };
 
  const [count,setCount]=useState(1)

  const Increment = () => {
    setCount(prevCount => prevCount + 1);
    dispatch({
      type: "increase_quantity",
      item:{
        id:id,
        price:price,
      }
    });
  };

  //Create handleDecrement event handler
  const Decrement = () => {
    if (count > 0  && setCount(prevCount => prevCount - 1));
    // dispatch({
    //   type: "REMOVE_FROM_BASKET",
    //   id,
    // });
  };

  return (
    <div>
    <div className="checkoutProduct">
      <div className="checkout_prod">
      <img className="checkoutProduct_image" src={image} alt="Product" />
      <div className="btn-count">
      <div onClick={Decrement}>-</div>
      <div className="btn__count" onClick>{count}</div>
      <div onClick={Increment}>+</div>
      </div>
      <button onClick={remove}>REMOVE</button>
      </div>
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          {price}
        </p>
        
      </div>
    </div>
    <hr/>
    </div>
  );
}

export default Checkout;