import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
// import Images from "./Images";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 245,
    width: 275,
    imageRendering: " https://tse1.mm.bing.net/th?id=OIP.CaPyrIE_F0aC3Fgxc5EWvAHaFj&pid=Api&P=0&w=201&h=152"
  },
  control: {
    padding: theme.spacing(2),
  },
 
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
      <p className="produce"> Produces today </p>
      
        <Grid container justify="center" spacing={spacing}>
       
        <br></br>
          {[0, 1, 2,3].map((value) => (
            <Grid key={value} item>
            <div className="card__upper"></div>
              <Paper className={classes.paper} style={{ backgroundColor: "#eeeeee" }} elevation={3}></Paper>
              <div className="card__info">
              <span className="card__catogeries">Text</span>
                  
                  </div>
              
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.control}>
        
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


//     <div className="cards">
    
//     <div className= "card">
//     <img src="https://tse1.mm.bing.net/th?id=OIP.CaPyrIE_F0aC3Fgxc5EWvAHaFj&pid=Api&P=0&w=201&h=152" />
//             <div className="card__info">
//                 <span className="card__catogeries">xxxxxxxxxx</span>
//                     <h3 className="card__title">xxxxxxxxxxx</h3>
                        
                          
                        
                        
//             </div>
//     </div>
// </div>


  );
}