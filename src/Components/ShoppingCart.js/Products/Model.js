import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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
    padding: theme.spacing(2, 4, 3),
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


export default function Variants(props) {
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
   <img src="https://tse4.mm.bing.net/th?id=OIP.PWg7-OCi85cdoV_VJjFMtgHaHa&pid=Api&P=0&w=300&h=300" style={{ }}/>
 
  </div>
);


  return (
<div>
    <div className={classes.root}>
      <Paper variant="outlined" onClick={handleOpen} ><img src="https://tse4.mm.bing.net/th?id=OIP.PWg7-OCi85cdoV_VJjFMtgHaHa&pid=Api&P=0&w=300&h=300" style={{ minWidth:"100%",height:"100%"}}/></Paper>
    
  
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
  <p>Black Marquino Granite is exclusively used in commercial as well as residential establishment. It can be used in interior and exterior application. Black Marquino Granite gives stunning appearance to the interior of house. Primary color of Black Marquino Granite is black with white or grey colour pattern on it. This granite is also used for decoration purpose.</p>

  <p>Black Marquino Granite is available as slab and tiles for clients. Thickness of slab is approximately 15mm to 20mm. Tiles are available in size of 1x1 and 2x2. Black Marquino Granite is also known as black marquina Granite. Size and thickness may vary according to the client’s requirement.</p>

  <p>GraniMart is largest supplier and manufacturer of Black Marquino Granite slab and tiles in India overseas at lowest price.</p>

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
