import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CartList from './../ShoppingCart.js/CartList'
import PaymentDiscription from './../ShoppingCart.js/PaymentDiscp';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from "@material-ui/core/InputBase";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Link, useHistory, useLocation, useParams} from "react-router-dom";
import SideLeft from './Side_Left';
import PopUp from './Products/Popup';
import ShippingForm from './Products/ShippingForm';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    
    padding: theme.spacing(2),
  
    color: theme.palette.text.secondary,
  },
  color:theme.palette.primary.main
}));

export default function Payment() {
  const classes = useStyles();
  const {data}=useLocation();
  
  const [open,setOpen]=useState(false)
  const [customer,setCustomer]=useState(null);
  let amount=0
  if(data){
    amount=data.reduce((acc,item)=>acc+=item.amount,0)
  }
  const onSubmit=async(v)=>{

    const options = {
        key: 'rzp_test_XLNXPWH6rHVE2k',
        amount:amount * 100,
        name: 'Granite Mart Payments',
        description: 'Donate yourself some time',
        customer: {
          name:customer?.customerName,
          contact: customer?.phone,
          email: customer?.email
        },
        prefill:{ contact: customer?.phone,
          email: customer?.email},
        options: {
          checkout: {
            readonly: {
              email: 1,
              contact: 1
            },method:{
              netbanking:true,
              card:false,
              upi:false,
              wallet:false
            }
          }
        },
        handler(response) {
          const paymentId = response.razorpay_payment_id;
        alert("Payment Successful with "+paymentId)
       // dispatch(clearCheckout())
        //history.push('/checkout/success/'+paymentId)
        
        },
    theme:{
        color:`${classes.color}`
    }
       
       
       
      };
      const rzp1 = new window.Razorpay(options);
    
      rzp1.open();
    
    
            }
          
  return (<>
      <div className="Cart" style={{ marginTop:"50px" }}>
    
    <div className={classes.root}>
      <Grid container spacing={1}>
       
        <Grid item xs={4}>
      <SideLeft/>
        </Grid>
       
        <Grid  item xs={8}>
        <p className="MY-Shopping-CART">PAYMENT</p>
        <Grid container spacing={1}>
      
        <Grid item xs={4} style={{ 
           height: '100%', justifyContent: "center",
          alignItems: "center" }}>
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
          endAdornment={<ArrowDropDownIcon />} 
          style={{ display: "flex", 
          justifyContent: "center",
          alignItems: "center"}} >
         </InputBase>
     
        </Grid>
        
        </Grid>
        
       
        {(data||[]).map((value) => (
        <div className="side_right">
       
        <div className={classes.root}>
        <Grid container spacing={3}>
       
        <Grid item xs={4}>
        <CartList/>        
        </Grid>
        <Grid item xs={8}>
         <PaymentDiscription {...value}/>
        </Grid>
        
        </Grid>
        </div>
        
      
        </div>
        ))}
       
    

        
       </Grid>
       
      </Grid>
      
    </div>

    <p className="Total-Amount-Rs-0000000000" style={{marginLeft:"auto",marginRight:"auto"}}><b>ADDRESS</b></p>
    <div className="" style={{textAlign:"center" }}> 
     <p>Customer Name:{customer?.customerName} </p>
     <p>phone        :{customer?.phone} </p>
     <p>email:{customer?.email}</p>
        <p>Address      :{customer?.address}</p></div>
      <Button onClick={()=>setOpen(true)} className="Path-890" variant="contained" color="#ffeb3b" style={{ backgroundColor:"#ffc107",marginLeft:"500px",marginRight:"auto" }}>
     <b>Edit Address</b>
   </Button> <br></br>
  
   <div className="">
  
        <p className="Total-Amount-Rs-0000000000" style={{ marginLeft:"auto",marginRight:"auto",marginTop:"50px" }}><b>Total Amount :  Rs {amount}</b></p> </div>
  { customer && <Button onClick={()=>onSubmit()} className="Path-890" variant="contained" color="#ffeb3b" style={{ backgroundColor:"#ffc107",marginLeft:"500px",marginRight:"auto"}}>
    <b>PAY NOW</b>
  </Button>}

    </div>
    <PopUp open={open} handleClose={()=>setOpen(false)}>
    <ShippingForm setValue={setCustomer}/>
</PopUp>
</>
  );
}
