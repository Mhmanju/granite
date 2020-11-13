import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CartList from './../ShoppingCart.js/CartList'

import ProfileDiscp from './../ShoppingCart.js/ProfileDiscp';
import ProfileUpdateInputs from './../ShoppingCart.js/ProfileUpdateInputs';
import ProfilePhoto from './../ShoppingCart.js/ProfPhoto';
import Button from '@material-ui/core/Button';
import SideLeft from './../ShoppingCart.js/Side_Left';
import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    
    padding: theme.spacing(2),
  
    color: theme.palette.text.secondary,
  },
}));

export default function ProfileUpdate() {
  const classes = useStyles();
  

  return (
      <div className="Cart" style={{ marginTop:"50px" }}>
    
    <div className={classes.root}>
      <Grid container spacing={3}>
       
        <Grid item xs={4}>
      <SideLeft/>
       <Link to="/submit"><Button className="SHOPONLINE" variant="contained"  style={{ backgroundColor:"#ffc107", width:"80%",height:"39px",marginRight:"auto"}}>
  <b>SHOP NOW</b>
</Button></Link>
        </Grid>
       
        <Grid  item xs={8}>

        
        <div className="side_right_prof">
        <Paper className={classes.paper} elevation={0} style={{ maxWidth:"100%" }} >
        <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={12}>
        <ProfileUpdateInputs/>
        </Grid>
       
       
        
        </Grid>
        </div>
        
        </Paper>
        </div>
       
       </Grid>
       
      </Grid>
      
    </div>

    
    </div>
    
  );
}
