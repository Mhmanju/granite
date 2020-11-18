import React from 'react';
import { makeStyles } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
   
  },
}));

export default function ProductDown() {
  const classes = useStyles();

  return (
      <div className="" >

<Grid container spacing={4}style={{ marginTop:"100px",borderTop:"2px solid black" }}>
<p style={{ justifyContent:"center",display:"center",marginLeft:"500px" }}><b>ORDER NOW</b></p>
<Grid container spacing={4}>
      <Grid item xs={4}>
      
      <button className="Rectangle-425">Quntity</button>
        <input className="Rectangle-424"  placeholder="Enroll your name" />
        
       
      
      </Grid>
      <Grid item xs={4}>
        
      </Grid>
      <Grid item xs={4}>
        
      </Grid>
      </Grid>
      </Grid>
   
  


      </div>

  );
}
