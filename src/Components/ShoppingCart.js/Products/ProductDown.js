import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useCart } from '../../../hooks/useCart';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
   
  },
}));

export default function ProductDown({data}) {
  const classes = useStyles();
  const {addItem}=useCart();
  const [qty,setQty]=useState(1);
  return (
      <div className="" >

<Grid container spacing={4} style={{ marginTop:"100px",borderTop:"2px solid black" }}>
<p style={{ justifyContent:"center",display:"center",marginLeft:"500px" }}><b>ORDER NOW</b></p>
<Grid container spacing={4}>
      <Grid item xs={4} >
      
      <p className=""><b>Quntity</b> <input className=""  placeholder="" value={qty}    style={{ marginLeft:"5px" }} onChange={(e)=>setQty(e.target.value)}/></p>
       
        
       
      
      </Grid>
      <Grid item xs={5}>
      <FormControl component="fieldset">
     
      <RadioGroup row aria-label="position" name="position" justifyContent="center"  style={{ color:"black" }}>
      <FormLabel component="legend" style={{ color:"black" }}>Type
        <FormControlLabel  
          value="Slab"
          control={<Radio color="primary" />}
          label="Slab"
         
       style={{ marginLeft:"5px" }} />
        <FormControlLabel
          value="Tile"
          control={<Radio color="primary"  />}
          label="Tile"
         
        />
       </FormLabel>
      </RadioGroup>
      
    </FormControl>
      </Grid>
      
      <Grid item xs={3}>
      <Button
               
                variant="contained"
                size="small"
                className={classes.button}
                onClick={()=>addItem({...data,qty:qty})}
              style={{ backgroundColor:"gold" }}>
              <b> ADD TO CART</b>
              </Button>
            
      </Grid>
      </Grid>
      </Grid>
      </div>

  );
}
