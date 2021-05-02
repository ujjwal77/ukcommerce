import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link} from 'react-router-dom';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';



function Navbar() {
  const [{basket}]=useStateValue();
    return (
      <div className="container-fluid">

      <nav className="navbar navbar-expand-lg navbar-dark">
      {/* <img src="https://media2.giphy.com/media/jtECu4KjK3cqiAUMyR/giphy.gif?cid=ecf05e47rvt7c0ppl93hhj5mq56nm6o54xaa1ok2uw8p6ne1&rid=giphy.gif&ct=g"  style={{height:40,background:'pink'}} /> */}

        <Link className="navbar-brand" to="/">UK-Cart <span><ShoppingCartIcon /></span> </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/Electronics">Electronics  </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/Fashion">Fashion  </Link>
            </li>
            <li className="nav-item">
            {/* <Link className="nav-link" to="/Detail">Detail </Link> */}
            </li>
            <li className="nav-item">
            <Link className="navbar-brand" to="/Cart"><ShoppingBasketIcon /><span className="basket_count">{basket.length===0?'':basket.length}</span></Link>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    )
}

export default Navbar

