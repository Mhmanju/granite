
import React from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(11),
      height: theme.spacing(16),
    },
  },
}));

export default function ProductDetailsLeft() {
  const classes = useStyles();

  return (
      <div>
    <div className={classes.root} justify-content="center" style={{ marginTop:"50px" }}>
      <Paper elevation={3} />
      <Paper elevation={3} />
      <Paper elevation={3} />
    </div>
    <p><b>RATING</b></p>
    <p>stars</p>

    <p><b>PRICE</b></p>
    <p>120/ square feet</p>

    




    <p><b>Minimum Order Quantity: </b></p>
    <p>2000 Square Feet</p>

    <p><b> GST: </b></p>
    <p> 18%</p>
    <p> Delivery charges extra…</p>


    </div>
    
  );
}

