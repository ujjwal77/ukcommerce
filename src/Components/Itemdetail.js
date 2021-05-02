import React from 'react'
import Detail from './Detail';
import {useStateValue} from './StateProvider'
import Navbar from './Navbar'


function Itemdetail() {
    const [{ cartdetail }, dispatch] = useStateValue();
    return (
        <div>
          <div className="colored-section" id="title">
            <Navbar/>
          </div>
          

          <h1>Item details:</h1>
          {cartdetail.length > 0 && cartdetail.map((item,index)=>(
               <Detail
                  key={index}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  quantity={item.quantity}
          />
        ))}
        </div>
    )
}

export default Itemdetail
