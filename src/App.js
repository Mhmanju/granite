
import React, { Component } from 'react'  
import './App.css';

import Payment from './Components/ShoppingCart.js/Payment';
import Profile from './Components/ShoppingCart.js/Profile';

import {BrowserRouter, Router, Route, Switch} from 'react-router-dom';
import CenteredGrid from './Components/ShoppingCart.js/Cart';
import HomePage1 from './Components/Pages/Home';
import PaymentForm from './Components/ShoppingCart.js/PaymentForm';
import  NavBar from './Components/NavBar';
import Footer from './Components/Pages/Footer';
import ProfileUpdate from './Components/ShoppingCart.js/ProfileUpdate';
import NavBarBelow from './Components/ShoppingCart.js/NavBarBelow';
import ProductSelect from './Components/ShoppingCart.js/Products/ProductListPage';
import {CartProvider} from './hooks/useCart'
import ProductDetails from './Components/ShoppingCart.js/Products/ProductDetails';
import Suppliers from './Components/ShoppingCart.js/Suppliers/Suppliers';
const App = () => (
  <>
 <CartProvider>

<BrowserRouter>

<div className="router">
<NavBar/>
 <NavBarBelow/>
 <div className="app_container">
<Route exact path="/" component={HomePage1}/>
<Route  path="/Cart" component={CenteredGrid}/>
<Route  path="/Payment" component={Payment}/>
<Route  path="/profile" component={Profile}/>
<Route  path="/shoponline" component={HomePage1}/>
<Route  path="/paymentForm" component={PaymentForm}/>
<Route  path="/ProfileUpdate" component={ProfileUpdate}/>
<Route  path="/ProductSelect" component={ProductSelect}/>
<Route  path="/ProductDetailPage" component={ProductDetails}/>
<Route  path="/Suppliers" component={Suppliers}/>


</div>
    
</div>
</BrowserRouter>
 
  
  
  <Footer/>
</CartProvider>
  </>
);

export default App;
  
