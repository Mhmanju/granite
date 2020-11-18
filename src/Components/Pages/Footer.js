import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import {
  AppBar,
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";
import logo from './../../Assets/images/logo.png'
const useStyles = makeStyles((theme) => ({
  fix: theme.mixins.toolbar,
  root: {
    position: "relative",
    
  }
}));
export default (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root} style={{ borderTop:"6px solid #fbc936",backgroundColor:"Black" }}>
      <Footer1 logo={logo} />
      <hr />
      <Footer2 />
    </Box>
  );
};

const Footer1 = ({ logo }) => {
  return (
    <Container style={{ padding: "45px 0", color: "white" }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <img src={logo} />
          <small
            style={{
              color: "white",
              padding: "0 30px 0 50px",
              display: "block",
              lineHeight: "20px"
            }}
          >
            High quality Granites sourced from nature and 100% eco-friendly
            materials. Designed for modern, minimalist apartments
          </small>
          <div style={{ color: "white", padding: "0 30px" }}>
            <IconButton>
              <FacebookIcon style={{ color:"white" }} />
            </IconButton>
            <IconButton>
              <TwitterIcon style={{ color:"white" }} />
            </IconButton>
            <IconButton>
              <LinkedInIcon style={{ color:"white" }} />
            </IconButton>
            <IconButton>
              <InstagramIcon style={{ color:"white" }} />
            </IconButton>
            <IconButton>
              <YouTubeIcon style={{ color:"white" }} />
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={12} md={2}>
          <div style={{ fontWeight: "bold", padding: "25px 0" }}>
            Shopping Online
          </div>
          <Box
            display="block"
            component="small"
            color="white"
            lineHeight="24px"
          >
            Order Status
          </Box>
          <Box
            display="block"
            component="small"
            color="white"
            lineHeight="24px"
          >
            Shipping and Delivary
          </Box>
          <Box
            display="block"
            component="small"
            color="white"
            lineHeight="24px"
          >
            Returns
          </Box>
          <Box
            display="block"
            component="small"
            color="white"
            lineHeight="24px"
          >
            Payment Options
          </Box>
          <Box
            display="block"
            component="small"
            color="white"
            lineHeight="24px"
          >
            Contact Us
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <div style={{ fontWeight: "bold", padding: "25px 0" }}>
            Information
          </div>
          <Box
            display="block"
            component="small"
            color="white"
            lineHeight="24px"
          >
            Gift Cards
          </Box>
          <Box
            display="block"
            component="small"
            color="white"
            lineHeight="24px"
          >
            Find a Store
          </Box>
          <Box
            display="block"
            component="small"
            color="white"
            lineHeight="24px"
          >
            NewsLetter
          </Box>
          <Box
            display="block"
            component="small"
            color="white"
            lineHeight="24px"
          >
            Become a Member
          </Box>
          <Box
            display="block"
            component="small"
            color="white"
            lineHeight="24px"
          >
            Site Feedback
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <div style={{ fontWeight: "bold", padding: "25px 0" }}>Contact</div>
          <Box
            display="block"
            component="small"
            color="white"
            lineHeight="24px"
          >
            contact@granite.com
          </Box>
          <Box
            display="block"
            component="small"
            color="white"
            lineHeight="24px"
          >
            HotLine: +91 113232331
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

const Footer2 = () => {
  return (
    <AppBar position="relative" style={{ borderTop:"2px solid grey",backgroundColor:"Black" }}>
      <Toolbar>
        <small style={{ width: "100%", textAlign: "center" }}>
          © 2020 GRANIMART. ALL RIGHTS RESERVED.
        </small>
      </Toolbar>
    </AppBar>
  );
};
