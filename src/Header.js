import React from 'react'
import {
    Navbar,
    NavbarBrand,
    NavItem,
    Nav,
    
  } from "reactstrap";
  import { NavLink } from "react-router-dom";
  import 'bootstrap/dist/css/bootstrap.min.css'

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './Components/StateProvider';

function Header() {
    const [{basket}]=useStateValue();
    return (
        <div>
        <Navbar expand="sm" dark fixed="top">
          <div className="container">
            <NavbarBrand>
              <NavLink to="/" className='carticon ml-auto'><span><ShoppingCartIcon /> UK-Cart </span> 
                {/* <img  src="" height="60" width="230" alt='Electura'></img> */}
              </NavLink>
            </NavbarBrand>
         
              <Nav navbar className="navLink">
                <NavItem>
                  <NavLink  className="nav-link text " to="/Electronics">
                   <span className='hstyle'> Electronics</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link text" to="/Fashion">
                  <span className='hstyle'> Fashion</span> 
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink className="nav-link text" to="/Itemdetail">
                  <span className='hstyle'> Detail</span> 
                  </NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink  className="nav-link text" to="/Cart">
                  <span className='hstyle'><ShoppingBasketIcon /><span className="basket_count">{basket.length===0?'':basket.length}</span></span>  
                  </NavLink>
                </NavItem>
              </Nav>
            
          </div>
        </Navbar>

     
        
      </div>
    )
}

export default Header
