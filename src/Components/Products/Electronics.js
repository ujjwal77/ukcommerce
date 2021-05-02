import React from 'react'
import Block from '../Block'
import alexa from '../../Image/alexa.jpeg'
import watch from '../../Image/watch.jpg'
import './Products.css'
import Navbar from '../Navbar'
import '../Home.css'

function Electronics() {
    return (
        <div style={{background:'linear-gradient(transparent,rgba(0,0,0,0.5))'}}>
            <div className="colored-section" id="title">
            <Navbar/>
            </div>
            <div className="home">
            <div className="home_row">
            <Block
                id={1}
                title="Alexa"
                price={1000}
                rating={4}
                image={alexa}
            />
            <Block
                id={2}
                title="Watch"
                price={5000}
                rating={4}
                image={watch}
            />
            <Block
                id={3}
                title="Headphone"
                price={8000}
                rating={4}
                quantity= {1}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOc4FwrqSOaknIfVAEiQXltTxt7zjBxnX7Sg&usqp=CAU"
            />
            </div>
            <div className="home_row">
            
            <Block
                id={4}
                title="Earphone"
                price={1000}
                rating={4}
                quantity= {1}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXDqlh7f9HHcthtqD1ttr18RuusCELfjRB38PVx7YotTABl68R2-K2vnXiA3J3d7wN7D8eGxU&usqp=CAc"
            />
            <Block
                id={5}
                title="Laptop"
                price={70000}
                rating={4}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm7wiBEWgD9xKfO21Iix2uqH1L08rkO19dLg&usqp=CAU"
            />
            </div>
        </div>
        </div>
    )
}

export default Electronics





