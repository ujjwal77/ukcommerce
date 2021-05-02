import React from "react";
import "./Block.css";
import {useStateValue} from './StateProvider'
import {Link} from 'react-router-dom'


function Block({ id, title, image, price, rating ,quantity}) {

  const [{ basket }, dispatch] = useStateValue();

  // const addToBasket = () => {
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: {
  //       id:id,
  //       title:title,
  //       image:image,
  //       price:price,
  //       rating:rating,
  //     },
  //   });
  // };

  const addToDetail = () => {
    dispatch({
      type: "ADD_TO_DETAIL",
      item: {
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
        quantity:quantity,
      },
    });
  };


  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          {price}
        </p>
      </div>
      
      <img src={image} alt="Product" />
      <Link className="nav-link" to="/Detail" onClick={addToDetail} style={{color:'purple'}}>Detail </Link>
      {/* <button onClick={addToBasket}>Add to basket</button> */}
    </div>
  );
}

export default Block;