import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
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
    <Grid container className="Cards4" spacing={3}>
    <p className="produce" style={{ padding:"10px" }}> Products in Today </p>
    
      <Grid item xs={12} sm={12}>
       
      
        <Grid container justify="center" spacing={spacing} style={{  }}>
       
       
          {[0, 1, 2,3].map((value) => (
            <Grid className="card4size" key={value} item style={{ }}>
            <div className="card__upper"></div>
              <Paper className="paperCard" style={{maxWidth:"100%" }} elevation={3}></Paper>
              <div className="card__info">
              
              <Link to='/Cart'> <span className="card__catogeries">Text</span></Link>
              
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