import React from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Productcontainer from './productContainerRight';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProductDetailsLeft from './ProductLeft';
import ProductDown from './ProductDown';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    
    padding: theme.spacing(2),
  
   
  },
}));

export default function ProductDetails() {
  const classes = useStyles();
 

  return (
    
      <div className="Cart" style={{ marginTop:"50px" }}>
    
    <div className={classes.root}>
      <Grid container spacing={4}>
      
       
        <Grid item xs={5}>
     <ProductDetailsLeft/>
        </Grid>
      
        <Grid  item xs={7}>
        <p className="MY-Shopping-CART">MY Shopping CART</p>
        {[0].map((value) => (
        <div className="Product_side_right">
            <Productcontainer/>
      
          
        
        </div>


     

     
        
        ))}
       
       </Grid>
     
       
      </Grid>
     
      


    </div>
    <ProductDown/>
    
    </div>
    
  );
}
