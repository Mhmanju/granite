import React from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Productcontainer from './productContainerRight';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import ProductDetailsLeft from './ProductLeft';
import ProductDown from './ProductDown';
import { useFetch } from '../../../hooks/useFetch';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    
    padding: theme.spacing(2),
  
   
  },
}));

export default function ProductDetails() {
  const {id}=useParams();
  const classes = useStyles();
 const {data,loading,error}=useFetch('product/'+id);
 if(loading){
  return <h1>Loading...</h1>
}
if(error){
  return <h2>{"error"}</h2>
}
if(data){
  return (
    
    <div className="Cart" style={{ marginTop:"50px" }}>
  
  <div className={classes.root}>
    <Grid container spacing={4}>
    
     
      <Grid item xs={5}>
   <ProductDetailsLeft data={data}/>
      </Grid>
    
      <Grid  item xs={7}>
<h3  style={{wra:'nowrap'}}>{data.productName}</h3>
      {[0].map((value) => (
      <div className="Product_side_right">
          <Productcontainer data={data}/>
    
        
      
      </div>


   

   
      
      ))}
     
     </Grid>
   
     
    </Grid>
   
    


  </div>
  <ProductDown data={data}/>
  
  </div>
  
);
}
else{
  return <></>
}
  
}
