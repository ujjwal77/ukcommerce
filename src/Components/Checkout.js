import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import './Home.css'

function Checkout({ item,id, title, image, price, rating }) {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();

  const remove = () => {
    // remove item from basket...
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };
 
  // const [count,setCount]=useState(1)

  const Increment = () => {
    // setCount(prevCount => prevCount + 1);
    dispatch({
      type: "increase_quantity",
      item:{
        id:id,
        price:price,
      }
    });
  };

  const Decrement = () => {
    // {basket.item.quantity}
    // if (count > 0  && setCount(prevCount => prevCount - 1));
    
    dispatch({
      type: "decrease_quantity",
      item:{
        id:id,
        price:price,
      }
    });
  };

  return (
    <div>
      <table class="table">
      <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Price</th>
        <th scope="col">Quantity</th>
        <th scope="col">Sub-Total</th>
      </tr>
    </thead>
    </table>
    <div className="checkoutProduct">
      <div className="checkout_prod">
      <img className="checkoutProduct_image" src={image} alt="Product" />
      <p>{title}</p>
      <div className="btn-count">
      <div onClick={Decrement}>-</div>
      <div className="btn__count" onClick>{item.quantity}</div>
      <div onClick={Increment}>+</div>
      </div>
      <button onClick={remove}>REMOVE</button>
      </div>
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_price">{price}</p>
        <p className="checkoutProduct_quantity">{item.quantity}</p>
        <p>${price*item.quantity}</p>
        
      </div>
    </div>
    <hr/>
    </div>
  );
}

export default Checkout;