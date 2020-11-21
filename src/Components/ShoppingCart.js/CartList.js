import React from 'react';
import { Avatar, makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
     
    },
  },
}));

export default function CartList({productImage}) {
  const classes = useStyles();

  return (
      <div className="CartBox">
    <div className={classes.root}>
     <Avatar variant='square' style={{height:'100%',width:'100%'}}src={productImage}></Avatar>
      </div>
    </div>
  );
}
