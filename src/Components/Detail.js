
import React from 'react'
import './Detail.css'
import {useStateValue} from './StateProvider'
import {Link} from 'react-router-dom'
import star from '../Image/starr.png'


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

            <Link to="/Fashion"> <button id="btn1" >BACK TO PRODUCTS</button></Link>   
            <Link to="/Cart"> <button id="btn1" onClick={addToBasket}>BUY NOW</button></Link>
            </div>
            </div>
            <div className="detail_info">
                <div className="detail_heading">{title}</div>
                <div className="detail_rating">
                {Array(rating)
                        .fill()
                        .map((_) => (
                          <img key={id++} src={star} alt="Star rating" />
                        ))}

                </div>
                <div className="detail_price"><b>{price}</b></div>
                <div className="detail_desc">!! description here !!</div>
                <div><b>Available :</b> In Stock</div>
            </div>
        </div>
    )
}

export default Detail
