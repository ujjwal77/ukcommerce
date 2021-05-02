import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import  alexa from "../Image/alexa.jpeg"
import  watch from "../Image/watch.jpg"
import Navbar from './Navbar'
import { Link} from 'react-router-dom';


function Home() {
    return (
        <div>
        <div className="colored-section" id="title">
            <Navbar/>
        </div>

        <div className="colored-section" id="testimonials">
            <div id="testimonial-carousel" className="carousel slide" data-ride="false">
                <div className="carousel-inner">
                    <div className="carousel-item active container-fluid">
                        <div className="u1">
                        <h2 className="testimonial-text">Best Deals Here!!</h2>
                        <Link to="/Electronics"><img className="testimonial-image" src={watch} alt=""/></Link>
                        <em style={{fontWeight:800,fontSize:28}}>Get 30% off</em>
                        </div>
                        
                    </div>
                    <div className="carousel-item container-fluid">
                        <div className="u1">
                        <h2 className="testimonial-text"> Buy Now , Limited offer !!</h2>
                        <Link to="/Electronics"><img className="testimonial-image" src={alexa} alt=""/></Link>
                        <em style={{fontWeight:800,fontSize:28}}>Get 40% off</em>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon"></span>
                </a>
                <Link className="nav-link" to="/Fashion"><button className="login">Shop Now</button> </Link>
            </div>
                
        </div>
        
        </div>
    )
}

export default Home
