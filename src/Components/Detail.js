
import React from 'react'
import './Detail.css'
import {useStateValue} from './StateProvider'
import {Link} from 'react-router-dom'


function Detail({ id, title, image, price, rating,quantity }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
      dispatch({
        type: "ADD_TO_BASKET",
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
        <div className="detail">
            <div className="detail_product">
            <img className="detail_image" src={image} alt="Product" />
            <div className="detail_btn">
            
            <Link to="/Cart"> <button id="btn1" onClick={addToBasket}>BUY NOW</button></Link>
            </div>
            </div>
            <div className="detail_info">
                <div className="detail_heading">{title}</div>
                <div className="detail_rating">RATING</div>
                <div className="detail_price"><b>{price}</b></div>
                <div className="detail_desc">description</div>
                Available : In Stock
            </div>
        </div>
    )
}

export default Detail
