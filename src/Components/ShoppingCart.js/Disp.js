import React from 'react';
import { makeStyles } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import { useCart } from '../../hooks/useCart';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
   
  },
}));

export default function Discription({id,title,qty,amount}) {
  const classes = useStyles();
  const {removeItem}=useCart();
  return (
      <div className="Disp">

  <p className="Adoni-Brown-Grooved">{title}</p>
    <p><b style={{ color:"black" }}>Quantity:</b> {qty} CARTONS </p>
    <p><b style={{ color:"black" }}>AMOUNT :</b> {amount} </p>

    <Grid container spacing={2}>
    <Grid item xs={6} sm={6}>
    <Button className="EditCart" variant="contained" color="#ffeb3b" style={{ backgroundColor:"#ffc107" }}>
    <b>EDIT CART</b>
  </Button>
    </Grid>

    <Grid item xs={6} sm={6}>
    <Button className="CANCEL-ORDER" style={{marginTop:"7px",lineHeight: "1.5"}} onClick={()=>removeItem({id:id})}>
    CANCEL ORDER
  </Button>
    </Grid>
    </Grid>


      </div>

  );
}
