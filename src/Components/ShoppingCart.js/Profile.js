import React from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ProfileDiscp from './../ShoppingCart.js/ProfileDiscp';
import ProfilePhoto from './../ShoppingCart.js/ProfPhoto';
import Button from '@material-ui/core/Button';
import SideLeft from './../ShoppingCart.js/Side_Left';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    
    padding: theme.spacing(2),
  
    color: theme.palette.text.secondary,
  },
}));

export default function Profile() {
  const classes = useStyles();
  

  return (
      <div className="Cart" style={{ marginTop:"50px" }}>
    
    <div className={classes.root}>
      <Grid container spacing={3}>
       
        <Grid item xs={4}>
       <SideLeft/>
        </Grid>
       
        <Grid  item xs={8}>

        
        <div className="side_right_prof">
        <Paper className={classes.paper} elevation={1} style={{ maxWidth:"100%" }} >
        <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={8}>
        <ProfileDiscp/>
        </Grid>
        <Grid item xs={4}>
        <ProfilePhoto/>   
        <Button className="Path-891" variant="contained"  style={{ backgroundColor:"#ffc107",marginTop:"10px",marginLeft:"10px",maxWidth:"100%" }}>
        <b>Change Photo</b>
        </Button>     

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
