
import React, { Component } from 'react'  
import './../../App.css';
import BootstrapCarousel from './../Carosal';
import Album from './../album';
import Cardstwo from './../Cards';
import Container3 from './../Container3';
import Container4 from './../Container4';
import NavBar from '../NavBar';
import Profile from './../ShoppingCart.js/Profile';
// import Cart from './Components/ShoppingCart.js/Cart';
// import Payment from './Components/ShoppingCart.js/Payment';
// import PrimarySearchAppBar from './Components/NavBar';
import ProfileUpdate from './../ShoppingCart.js/ProfileUpdate';
import ProductDetails from './../ShoppingCart.js/Products/ProductDetails'



const HomePage1 = () => (
    
  <>
 
<div>

  <BootstrapCarousel/><br></br>

  <BootstrapCarousel/><br></br>
  <Album/><br></br>
  <Container3/><br></br>
  <Cardstwo/><br></br>
  <Container4/>
  <ProductDetails/>
 

 
  
  </div>
  

  </>
);

export default HomePage1;
  
