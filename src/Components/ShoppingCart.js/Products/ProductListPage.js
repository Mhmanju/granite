import React from "react";
import {
  Avatar,
  Box,
  Button,
  
  Grid,
  makeStyles,
  Paper,
  TextField
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "290px"
  },
  paper: {
    width: "80%",
    height: "250px",
    padding: "24px 29px",
    boxShadow: "0 20px 30px 0 rgba(0, 0, 0, 0.16)"
  },
  image: { height: "100%", width: "100%" },
  title: {
    width: "100%",
    padding: "20px 20px 0 0",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontWeight: "600",
    fontSize: "24px",
    "&:hover": { overflow: "visible", color: theme.palette.secondary.main }
  },
  price: {},
  button: { height: "22px", minWidth: "110px" },
  buttonGrid: {
    display: "flex",
    gap: "10px",
    width: "100%",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  div: {
    fontSize: "40px",
    fontWeight: "600",
    marginLeft: "500px",
    marginTop: "50px"
  },
  search: {
    marginLeft: "350px",
    width: "500px",
    marginTop: "20px"
  },
  slb: {
    marginLeft: "540px",
    fontWeight: "normal",
    fontSize: "40px",
    marginTop: "42px"
  },
  Btn: {
    marginLeft: "480px",
    backgroundColor: "#fbc936"
  }
}));
export default function SlabsCard() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.div}>Products </div>
      <TextField
        id="outlined-basic"
        label="slabs"
        placeholder="slabs"
        variant="outlined"
        className={classes.search}
      />
      
      <div className={classes.slb}>Slabs</div>
      <Grid container maxWidth="lg">
      {[0, 1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((value) => ( 
        <Grid item style={{ marginTop: "50px" }}>
          <Box className={classes.root}>
            <Paper variant="outlined" className={classes.paper}>
              <Avatar
                variant="square"
                style={{ width: "100%", height: "100%" }}
              >
                h
              </Avatar>
            </Paper>
           
            <Box className={classes.title}>ADONI BROWN GROOVED</Box>
            <Box className={classes.price}>Rs 80/square feet</Box>
            <Box className={classes.buttonGrid}>
              <Button
                
                variant="contained"
                size="small"
                className={classes.button}
             style={{ backgroundColor:"gold",color:"black" }} >
                Add Cart
              </Button>
              <Button
                color="secondary"
                variant="contained"
                size="small"
                className={classes.button}
                style={{ backgroundColor:"gold" ,color:"black" }} >
                Buy Now
              </Button>
              <Button
                color="secondary"
                variant="contained"
                size="small"
                className={classes.button}
                style={{ backgroundColor:"gold",color:"black"  }} >
                Know More
              </Button>
            </Box>
          </Box>
        </Grid>
      ))}

      </Grid>
      <div style={{ marginTop: "50px", padding: "70px" }}>
        <Button className={classes.Btn} size="small">
          Load more
        </Button>
      </div>
    </>
  );
}
