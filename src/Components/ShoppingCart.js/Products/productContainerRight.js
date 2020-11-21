import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { Avatar, makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import ProductDown from './ProductDown';


import Modal from '@material-ui/core/Modal';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: '800px',
      height: '242px'
    },
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 3, 4),
  },
}));

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


export default function Variants({data,...props}) {
  const classes = useStyles();
  
// getModalStyle is not a pure function, we roll the style only on the first render
const [modalStyle] = React.useState(getModalStyle);
const [open, setOpen] = React.useState(false);

const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

const body = (
  <div style={modalStyle} className={classes.paper}>
   <Avatar src={data?.productImage} style={{ }}/>
 
  </div>
);


  return (
<div>
    <div className={classes.root}>
      <Paper variant="outlined" onClick={handleOpen} ><Avatar variant='square' src={data.productImage} style={{ minWidth:"100%",height:"100%"}}/></Paper>
    
  
  </div>
  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
  
  <div style={{ marginBottum:"200px"}}>
  <p style={{textAlign:'justify',lineHeight:'2'}}>{data.details}</p>
  <p>Features</p>
  <p>Ideal for flooring and kitchen countertop</p>
  <p>Available as slab and Tiles</p>
  <p>Thickness 15mm to 20mm</p>

  <p>Specifications</p>
  <p>Water resistant property</p>
  <p>Long lasting shine</p>
  <p>Highly durable</p>
</div>
</div>
  );
}
