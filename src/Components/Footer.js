import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";


function Footer() {
    return (
        <footer className="Foooter">
        <div className="x1">
                <div className="x2">
                    <p className="social-container">
                        
                        <a
                        href="https://www.facebook.com/"
                        className="facebook social"
                        >
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a
                        href="https://www.linkedin.com/in/ujjwal-kumar-37b301180/"
                        className="linkedin social"
                        >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a
                        href="http://www.instagram.com/"
                        className="instagram social"
                        >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                    </p>
                </div>
                <div className="x3">
                    {/* <p><a href="mailto:kumarujjwal50387@gmail.com"><p><i class='fas fa-envelope'></i>kumarujjwal50387@gmail.com</p></a></p>
                    <p><a href="tel:7667761068"><p><i class="fas fa-phone"></i>contact me</p></a></p> */}
                    <p> © Ujjwal All rights reserved</p>
                </div>
            </div>
            </footer>
    )
}

export default Footer
