import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
   
  },
}));

export default function Discription() {
  const classes = useStyles();

  return (
      <div className="Disp">

     <p className="Adoni-Brown-Grooved">Adoni Brown Grooved</p>
    <p><b style={{ color:"black" }}>Quantity:</b> 140 CARTONS </p>
    <p><b style={{ color:"black" }}>AMOUNT :</b> 000000000000000 </p>

    <Grid container spacing={2}>
    <Grid item xs={6} sm={6}>
    <Button className="EditCart" variant="contained" color="#ffeb3b" style={{ backgroundColor:"#ffc107" }}>
    <b>EDIT CART</b>
  </Button>
    </Grid>

    <Grid item xs={6} sm={6}>
    <Button className="CANCEL-ORDER" >
    CANCEL ORDER
  </Button>
    </Grid>
    </Grid>


      </div>

  );
}
