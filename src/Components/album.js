import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
// import Images from "./Images";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
   
    
    
  },
  control: {
    
  },
 
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
 
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <div>
    <Grid container className={classes.root} spacing={2} >
      <Grid item xs={12} >
     
        <Grid  container justify="center" spacing={spacing} >
       
        
          {[0, 1, 2,3,4,5,6,7,0, 1, 2,3,4,5,6,7,0, 1, 2,3,4,5,6,7].map((value) => (
            <Grid key={value} item >
            <div className="ad" >
              <Paper  className="paper_4" elevation={10} style={{ backgroundColor: "gray" }}  />
              </div>
             
              
            </Grid> 
          ))}
        </Grid>
      </Grid>
    

</Grid>

    </div>

  );
}