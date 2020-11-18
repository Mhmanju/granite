
  
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';


// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

class PaymentForm extends React.Component {
    
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {},
        
      }
      
      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  
    };
s
    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });
  
    }
  
    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["cardname"] = "";
          fields["cardno"] = "";
          fields["CVV"] = "";
          fields["expirydate"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }
    
    }
     
   
render() {
  
    return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="">
        <Avatar className="">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
         Pay now
        </Typography>
       
        <form className="" method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="cardname"
                name="cardname"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Card Holder Name"
                autoFocus
              />
            </Grid>
           
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Cardno"
                label=" Card Number"
                name="Cardno"
                
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="expirydate"
                label="Expiry Date"
                type="Date"
                id="expirydate"
               
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="CVV"
                label="CVV"
                type="CVV"
                id="CVV"
               
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowOTP" color="primary" />}
                label="you will recive OTP"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
     
      </Box>
    </Container>
  );
}
}

export default PaymentForm;