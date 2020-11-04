import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CartList from './CartList'
import Checkboxes from './Checkbox';
import Discription from './Disp';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    
    padding: theme.spacing(2),
  
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  

  return (
      <div className="Cart">
    
    <div className={classes.root}>
      <Grid container spacing={3}>
       
        <Grid item xs={4}>
          <Paper className={classes.paper} elevation={4} style={{ minHeight: '750px', maxWidth:'316px' }} > 
          <div className="side_left">
          <h2 className="HELLO">HELLO</h2>
          <p className="Mr-Barrak-Obama">Mr Barrak Obama</p>
          <h3 className="ACCOUNT-SETTINGS">ACCOUNT SETTINGS</h3><br></br>
            <p className="Profile-Information-Manage-Addresses">Profile Information
            Manage Addresses</p>
            <h2 className= "PAYMENTS">PAYMENT</h2>
            <p className="Mr-Barrak-Obama">Payment History
            Saved Cards</p><br></br>
            <h3 className="Path-1126">MY STUFF</h3>
            <p className="Mr-Barrak-Obama">My Shopping Cart</p>
            <p className="Mr-Barrak-Obama">My Orders</p>
            <p className="Mr-Barrak-Obama">All Notifications</p>
            <p className="Mr-Barrak-Obama"> My Wishlist</p>
            <p className="Mr-Barrak-Obama"> Change Password</p>
            <p className="Mr-Barrak-Obama">Track Order</p>
            <p className="Mr-Barrak-Obama"> Help Center</p>
            <h3 className="LOGOUT">LOGOUT</h3>

          </div>
          </Paper>
        </Grid>
       
        <Grid  item xs={8}>
        <p className="MY-Shopping-CART">MY Shopping CART</p>
        {[0, 1, 2,3].map((value) => (
        <div className="side_right">
        <Paper className={classes.paper} elevation={1} style={{ minHeight: '220px',maxWidth:"921px" }} >
        <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={1}>
        <Checkboxes/>        
        </Grid>
        <Grid item xs={4}>
        <CartList/>        
        </Grid>
        <Grid item xs={7}>
         <Discription/>
        </Grid>
        
        </Grid>
        </div>
        
        </Paper>
        </div>
        ))}
        <Button className="Path-890" variant="contained" color="#ffeb3b" style={{ backgroundColor:"#ffc107",marginBottom:"100px",marginTop:"100px" }}>
    <b>Checkout</b>
  </Button>
       </Grid>
       
      </Grid>
      
    </div>

    
    </div>
    
  );
}
