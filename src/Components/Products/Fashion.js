import React from 'react'
import Block from '../Block'
import f1 from '../../Image/f1.jpeg'
import f2 from '../../Image/f2.jpg'
import f3 from '../../Image/f3.jpeg'
import f4 from '../../Image/f4.jpeg'
import f5 from '../../Image/f5.jpg'
import './Products.css'
import Navbar from '../Navbar'
import '../Home.css'
import { useStateValue } from '../StateProvider'

function Fashion() {

    const [{basket}]=useStateValue();
    console.log(basket);
    return (
        <div style={{background:'linear-gradient(transparent,rgba(0,0,0,0.5))'}}>
        <div className="colored-section" id="title">
            <Navbar/>
        </div>
        <div className="home">
            <div className="home_row">
            <Block
                id={11}
                title="Mens Shoe"
                price={3000}
                rating={4}
                image ={f1}
            />
            <Block
                id={12}
                title="Mens Shoe"
                price={1000}
                rating={4}
                image ={f2}
            />
             <Block
                id={15}
                title="Slippers"
                price={1500}
                rating={4}
                image ={f5}
            />
            </div>
            <div className="home_row">
            <Block
                id={13}
                title="Mens Tshirt"
                price={2500}
                rating={4}
                image ={f3}
            />
            <Block
                id={14}
                title="Mens Tshirt"
                price={1000}
                rating={4}
                image ={f4}
            />
            </div>
            
        </div>
        </div>
    )
}

export default Fashion
