import React from 'react';
import { makeStyles } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
   
  },
}));

export default function PaymentDiscription() {
  const classes = useStyles();

  return (
      <div className="ProfptoDisp">
    <Grid container spacing={2}>
    <Grid item xs={8} sm={8}>
    <Grid container spacing={2}>
    <Grid item xs={8} sm={8}>
    <p className="Adoni-Brown-Grooved" style={{ marginRight:"785px",textAlign:"left" }}><b>PERSONAL INFORMATION</b></p><br></br>
     </Grid>
  <Grid item xs={4} sm={4} >
  <Button className="EditProfile" variant="contained"  style={{ backgroundColor:"#ffc107", width:"76px",height:"23px" }}>
  <b>EDIT</b>
</Button></Grid>
  </Grid>
    <p><b style={{ color:"black" }}>NAME:</b> BARAK OBAMA </p>
    <p><b style={{ color:"black" }}>GENDER :</b> Male </p>
    <Grid container spacing={2}>
    <Grid item xs={8} >
    <p className="Adoni-Brown-Grooved"><b>CONTACT INFORMATION</b></p><br></br> </Grid>
  <Grid item xs={4} >
  <Button className="EditProfile" variant="contained"  style={{ backgroundColor:"#ffc107", width:"76px",height:"23px" }}>
  <b>EDIT</b>
</Button></Grid>
  </Grid>
    <p><b style={{ color:"black" }}>EMAIL:</b> barak@gmail.com </p>
    <p><b style={{ color:"black" }}>PHONE :</b> 0000000 </p>
    <p><b style={{ color:"black" }}>Address :</b>  Address Line to go here Address Line to go hereAddress 
    Line to go here Line to go hereLine to go here
    Line to go here Line to go hereLine to go here</p>

    </Grid>

    <Link to="shoponline"><Button className="SHOPONLINE" variant="contained"  style={{ backgroundColor:"#ffc107", width:"316px",height:"39px",marginTop:"320px",marginLeft:"270px" }}>
  <b>SHOP ONLINE</b>
</Button></Link>
    </Grid>
    


      </div>

  );
}
