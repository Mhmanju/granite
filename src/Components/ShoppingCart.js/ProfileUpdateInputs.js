import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import GenderButtons from './Gender';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
   
  },
  input: {
      minWidth:"300px",
      
      marginBottom:"20px",
  },
  addInput:{
    minWidth:'100%',
  }
}));

export default function PaymentDiscription() {
  const classes = useStyles();

  return (
      <div className="ProfptoDisp">
         
    <Grid container spacing={2}  >
    <form className={classes.root} noValidate autoComplete="off">
    <Grid item xs={12} sm={12}>
    
    
    <p className="Personal-Information" ><b>PERSONAL INFORMATION</b></p><br></br>
    
     
   
    <Grid container spacing={2}>
    <Grid item xs={6} sm={6} >
    <TextField className={classes.input} id="outlined-basic" label="First Name *" variant="outlined"/>
   
     
   
    
    </Grid>
    
    <Grid item xs={6} sm={6}>
    
      <TextField className={classes.input} id="outlined-basic" label="Last Name *" variant="outlined"  />

    
    </Grid>
   
    
    
    </Grid>
    
    <Grid container spacing={2}>
    <Grid item xs={6} sm={6} >
    <TextField className={classes.input} id="outlined-basic" label="ENTER PASSWORD " variant="outlined" />
   
      
   
    
    </Grid>
    <Grid item xs={6} sm={6}>
    
      <TextField className={classes.input} id="outlined-basic" label="MOBILE NUMBER" variant="outlined" />
   
    
    </Grid>
    
    
    </Grid>
<GenderButtons/>

   
    <p className="Personal-Information"><b>CONTACT INFORMATION</b></p><br></br> 
    <Grid container spacing={2}>
    <Grid item xs={6} sm={6} >
    <TextField className={classes.input} id="outlined-basic" label="PHONE NUMBER" variant="outlined" style={{ borderColor:"1px solid black" }} />
   
      
   
    
    </Grid>
    <Grid item xs={6} sm={6}>
    
      <TextField className={classes.input} id="outlined-basic" label="ADDRESS" variant="outlined" />
   
    
    </Grid>
    
    
    </Grid>

     <Grid container spacing={2}>
    <Grid item xs={6} sm={6} >
    <TextField className={classes.input} id="outlined-basic" label="ALETRNATIVE MOBILE NUMBER" variant="outlined" />
   
      
   
    
    </Grid>
   
    
    
    </Grid>

    <Grid container spacing={2}>
    <Grid item xs={12} sm={12} >
    <TextField className={classes.addInput}
          id="outlined-multiline-static"
          label="Address"
          multiline
          rows={4}
         
          variant="outlined"
        />
   
      
   
    
    </Grid>
   
    
    
    </Grid>
    <Link to="/submit"><Button className="SHOPONLINE" variant="contained"  style={{ backgroundColor:"#ffc107", minwidth:"250px",height:"39px",marginTop:"30px",marginLeft:"150px",marginRight:"auto"}}>
  <b>SUBMIT</b>
</Button></Link>

    </Grid>
    </form>

   
  
    </Grid>
    


      </div>

  );
}
