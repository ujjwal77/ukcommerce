import React,{useState,useEffect} from 'react'
import './Home.css'
import './Block.css'
import { useStateValue } from './StateProvider'
import Navbar from './Navbar'
import { Link} from 'react-router-dom';
import Checkout from './Checkout'
import {cartTotal} from '../Reducer'

function Cart() {
  const [{basket},dispatch]=useStateValue();


  // const [cart, setCart] = useState([]);
  
  // const remove = (removeitem) => {
  //   cart = [...basket];
  //   setCart(
  //     cart.filter((item)=>item!==removeitem
  //     )
  //   )
  // }

  // const [cartTotal, setCartTotal] = useState(0);

  // useEffect(() => {
  //   total();
  // }, [basket]);

  // const total = () => {
  //   let totalVal = 0;
  //   for (let i = 0; i < basket.length; i++) {
  //     totalVal += basket[i].price;
  //   }
  //   setCartTotal(totalVal);
  // };

  return (
    <div>
      <div className="colored-section" id="title">
            <Navbar/>
      </div>
      

      {basket.length === 0 ? (
          <div>
            <h2 style={{marginTop:100}}>Your Shopping Basket is Empty </h2>
            <Link style={{marginTop:50,marginBottom:50}} className="nav-link" to="/Fashion"><button id="btn">Continue Shopping</button> </Link>
          </div>
        ) :
    
        (
          <div className="cart_border">
          <h1>your Cart :</h1>
          {basket.map((item,index)=>(
            <Checkout
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
          />
          ))}

      <hr/>
      <div className="Total">
        <div className="blank"></div>
        <h5 className="Subtotal">Subtotal ({basket.length} items): $ {cartTotal(basket)}<br/>
        Delivery Charges :  $ 40 <br/><hr/>
        Total Charges : <strong className="Subtotal1"> $ {cartTotal(basket)+40} </strong></h5>
      </div>
      </div>
    )}
    
    </div>
  )
}

export default Cart
