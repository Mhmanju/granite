import React from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CartList from './../ShoppingCart.js/CartList'
import Checkboxes from './../ShoppingCart.js/Checkbox';
import PaymentDiscription from './../ShoppingCart.js/PaymentDiscp';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from "@material-ui/core/InputBase";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Link} from "react-router-dom";
import SideLeft from './Side_Left';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    
    padding: theme.spacing(2),
  
    color: theme.palette.text.secondary,
  },
}));

export default function Payment() {
  const classes = useStyles();
  

  return (
      <div className="Cart" style={{ marginTop:"50px" }}>
    
    <div className={classes.root}>
      <Grid container spacing={3}>
       
        <Grid item xs={4}>
      <SideLeft/>
        </Grid>
       
        <Grid  item xs={8}>
        <p className="MY-Shopping-CART">PAYMENT</p>
        <Grid container spacing={4}>
       
        <Grid item xs={4} style={{ 
           height: '100%', justifyContent: "center",
          alignItems: "center"}}>
        <p className="" style={{}}>Select Payment Gateway:</p>       
        </Grid>
        <Grid item xs={7} style={{  display: "flex",
          justifyContent: "center",
          alignItems: "center" }}>
         
      
        
        <InputBase className="PaymentSearch"
          placeholder="Search…"
          
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          
          inputProps={{ 'aria-label': 'search' }}
          endAdornment={<ArrowDropDownIcon />} >
         </InputBase>
     
        </Grid>
        
        </Grid>
        
       
        {[0, 1, 2,3].map((value) => (
        <div className="side_right">
       
        <div className={classes.root}>
        <Grid container spacing={3}>
       
        <Grid item xs={4}>
        <CartList/>        
        </Grid>
        <Grid item xs={8}>
         <PaymentDiscription/>
        </Grid>
        
        </Grid>
        </div>
        
      
        </div>
        ))}
       
    

        
       </Grid>
       
      </Grid>
      
    </div>

    <p className="Total-Amount-Rs-0000000000" style={{marginLeft:"auto",marginRight:"auto"}}><b>ADDRESS</b></p>
    <div className="" style={{textAlign:"center" }}> <p> 
     Address Line to go here Address Line to go hereAddress  </p>
     <p>Line to go here </p>
     <p>Line to go hereLine to go he </p>
     <p>Line to go here Line to go hereLine to go here</p></div>
     <Link to="/ProfileUpdate"> <Button className="Path-890" variant="contained" color="#ffeb3b" style={{ backgroundColor:"#ffc107",marginLeft:"500px",marginRight:"auto" }}>
     <b>Edit Address</b>
   </Button></Link> <br></br>
  
   <div className="">
  
    <p className="Total-Amount-Rs-0000000000" style={{ marginLeft:"auto",marginRight:"auto",marginTop:"50px" }}><b>Total Amount :  Rs 0,00,00,000.00</b></p> </div>
   <Link to="/paymentForm"> <Button className="Path-890" variant="contained" color="#ffeb3b" style={{ backgroundColor:"#ffc107",marginLeft:"500px",marginRight:"auto"}}>
    <b>PAY NOW</b>
  </Button></Link>

    </div>
    
  );
}
