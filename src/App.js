
import './App.css';
import Home from './Components/Home'
import { Router,Route,Switch} from 'react-router-dom';
import history from './History'
import Fashion from './Components/Products/Fashion';
import Electronics from './Components/Products/Electronics';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
import Itemdetail from './Components/Itemdetail';
import Header from './Header';


function App() {
  return (
    <div className="app">
      <Router history={history}>
        {/* <Header/> */}
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Electronics" component={Electronics} />
          <Route path="/Fashion" component={Fashion} />
          <Route path="/Cart" component={Cart} />
          <Route path="/Detail" component={Itemdetail} />
      </Switch>
      </Router>
      <Footer/>

    </div>
  );
}

export default App;
