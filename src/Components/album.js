import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
// import Images from "./Images";

import purple from '@material-ui/core/colors/purple';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    
    height: 136,
    width: 225,
    
    
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
      <Grid item xs={12}>
     
        <Grid  container justify="center" spacing={spacing}>
       
        <br></br>
          {[0, 1, 2,3,4,5,6,7].map((value) => (
            <Grid key={value} item >
            <div className="ad">
              <Paper  className="paper_4" elevation={10} style={{ backgroundColor: "#bdbdbd" }}  />
              </div>
             
              
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper >
        
          <Grid container>
          
            <Grid item>
              
              <RadioGroup
                name="spacing"
                aria-label="spacing"
                value={spacing.toString()}
                onChange={handleChange}
                row
              >
              
               
              </RadioGroup>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
    <Grid container className={classes.root} spacing={2}>
    <Grid item xs={12}>
    
    
      <Grid container justify="center" spacing={spacing}>
     
      <br></br>
        {[0, 1, 2,3,4,5,6,7].map((value) => (
          <Grid key={value} item>
          
            <Paper className="paper_4" elevation={10} style={{ backgroundColor: "#bdbdbd" }} />
           
           
            
          </Grid>
        ))}
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <Paper >
      
        <Grid container>
        
          <Grid item>
            
            <RadioGroup
              name="spacing"
              aria-label="spacing"
              value={spacing.toString()}
              onChange={handleChange}
              row
            >
            
             
            </RadioGroup>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  </Grid>
  <Grid container className={classes.root} spacing={2}>
  <Grid item xs={12}>
 
  
    <Grid container justify="center" spacing={spacing}>
   
    <br></br>
      {[0, 1, 2,3,4,5,6,7].map((value) => (
        <Grid key={value} item>
        
          <Paper className="paper_4" elevation={10} style={{ backgroundColor: "#bdbdbd" }}  />
         
         
          
        </Grid>
      ))}
    </Grid>
  </Grid>
  <Grid item xs={12}>
    <Paper >
    
      <Grid container>
      
        <Grid item>
          
          <RadioGroup
            name="spacing"
            aria-label="spacing"
            value={spacing.toString()}
            onChange={handleChange}
            row
          >
          
           
          </RadioGroup>
        </Grid>
      </Grid>
    </Paper>
  </Grid>
</Grid>

    </div>

  );
}