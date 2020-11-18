import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
   
  },
}));

export default function ProductDown() {
  const classes = useStyles();

  return (
      <div className="" >

<Grid container spacing={4} style={{ marginTop:"100px",borderTop:"2px solid black" }}>
<p style={{ justifyContent:"center",display:"center",marginLeft:"500px" }}><b>ORDER NOW</b></p>
<Grid container spacing={4}>
      <Grid item xs={4} >
      
      <p className=""><b>Quntity</b> <input className=""  placeholder=""    style={{ marginLeft:"5px" }} /></p>
       
        
       
      
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
              style={{ backgroundColor:"gold" }}>
              <b> ADD TO CART</b>
              </Button>
            
      </Grid>
      </Grid>
      </Grid>
   
  


      </div>

  );
}
