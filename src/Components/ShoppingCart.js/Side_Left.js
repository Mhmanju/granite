import React from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    
  
  
   
  },
}));

export default function SideLeft() {
  const classes = useStyles();
 

  return (
<Paper className={classes.paper} elevation={4} style={{ minHeight: '750px', maxWidth:'80%' ,backgroundColor:"#bdbdbd"}} > 
<div className="side_left" style={{ marginLeft:"30px" }}>
  <Link to="/profile">
<p className="HELLO">HELLO</p>
<p className="Mr-Barrak-Obama">Mr Barrak </p><br></br>
<p className="ACCOUNT-SETTINGS">ACCOUNT SETTINGS</p><br></br>
  <p className="Mr-Barrak" style={{ color:"black" }}>Profile Information
  Manage Addresses</p>
  <p className= "PAYMENTS">PAYMENT</p>
  <p className="Mr-Barrak" style={{ color:"black" }}>Payment History
  Saved Cards</p><br></br>
  <p className="Path-1126">MY STUFF</p>
  <p className="Mr-Barrak" style={{ color:"black" }}>My Shopping Cart</p>
  <p className="Mr-Barrak" style={{ color:"black" }}  >My Orders</p>
  <p className="Mr-Barrak" style={{ color:"black" }}>All Notifications</p>
  <p className="Mr-Barrak" style={{ color:"black" }}> My Wishlist</p>
  <p className="Mr-Barrak" style={{ color:"black" }}> Change Password</p>
  <p className="Mr-Barrak" style={{ color:"black" }}>Track Order</p>
  <p className="Mr-Barrak" style={{ color:"black" }}> Help Center</p>
  <p className="LOGOUT">LOGOUT</p>
  </Link>

</div>
</Paper>

  );
}