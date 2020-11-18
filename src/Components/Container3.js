import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
// import Images from "./Images";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
 
  control: {
    
  },
  Paper:{

  }
 
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(12);
  const classes = useStyles();
 
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
      <p className="produce_1" justify="center"> Why should you choose us? </p>
      
        <Grid container justify="center" spacing={spacing} className="contcells">
       
        <br></br>
          {[0, 1, 2,3].map((value) => (
            <Grid key={value} item  >
            <div className="contpaper3">
            <div className="call3">
              <Paper className="paper_3" elevation={10} style={{ backgroundColor: "#ffc107" }} ><img  className="Icon_c3"  
              src={'../Assets/images/apartment-clean-condominium-279719@2x.png'} style={{ width: '30px', height: '30px' }} ></img> </Paper>
              </div>
              <div className="card3__info">
              <span className="card3__catogeries">xxxxxxxxxxxxxxxxxxxxx</span>
              <p className="card4__catogeries">All purchases over $399 are eligible for
              free shipping via UPS Pack and Ship.</p>
              </div>
              </div>
                  
            </Grid>
          ))}
        </Grid>
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