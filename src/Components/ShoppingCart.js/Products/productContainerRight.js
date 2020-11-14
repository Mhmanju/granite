// import React from '/react js';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ProductDown from './ProductDown';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        minwidth: '100%',
        minheight: '100%',
      },
    },
  }));
  
export default function Productcontainer() {
    const classes = useStyles();

    return (
      <div>
        <Grid container spacing={4} className={classes.root} >
    <Paper elevation={5}  />
<div style={{ marginBottum:"200px" }}>
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
        </Grid>
        

        </div>
        
    
    );
}


 

