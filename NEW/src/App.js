import React from 'react';
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import Payment from './components/Payments/Payment';
import Home from './components/Home/Home';
import Address from './components/Address/Address'
import AddAddress from './components/Address/addAddress'
const App = () => {
  return (
    <Router>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/product'} component={Product} />
      <Route exact path={'/cart'} component={Cart} />
      <Route exact path={'/payment'} component={Payment}/>
      <Route exact path={'/address'} component={Address}/>
      <Route exact path={'/addaddress'} component={AddAddress}/>
    </Router>
  );
}

export default App;