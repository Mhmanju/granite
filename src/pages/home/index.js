import { Box, Container } from "@material-ui/core";
import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../../components/home/Footer";
import Navbar from "../../components/home/Navbar";
import Searchbar from "../../components/home/Searchbar";
import logo from "../images/logo.png";
const HomePage = lazy(() => import("./HomePage"));
const ProductList=lazy(()=>import('./ProductListPage'))
const ShowRoomList=lazy(()=>import('./ShowRoomListPage'))
const OrdersPage=lazy(()=>import('./OrdersPage'))
const PaymentPage=lazy(()=>import('./PaymentPage'))
const ProfilePage=lazy(()=>import('./ProfilePage'))
const CartPage=lazy(()=>import('./CartPage'))
const CreateProfilePage=lazy(()=>import('./CreateProfile'))
export default () => (
  <Box display="flex" flexDirection="column" minHeight="100vh">
    <Navbar logo={logo} />
    <Searchbar />
    <Box flexGrow="1">
    <Container fixed>
      <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path='/createProfile' component={CreateProfilePage}/> 
      <Route path='/cart' component={CartPage}/> 
      <Route path='/profile' component={ProfilePage}/> 
      <Route path='/payment' component={PaymentPage}/> 
      <Route path='/order' component={OrdersPage}/> 
      <Route path='/showroomList' component={ShowRoomList}/>  
      <Route path='/productList' component={ProductList}/>
       
      </Switch>
      </Container>
    </Box>
    <Footer logo={logo}/>
  </Box>
);
