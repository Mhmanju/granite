import React from "react";
import {
  Avatar,
  Box,
  Button,
  InputBase,
  Container,
  Grid,
  makeStyles,
  Paper,
  TextField
} from "@material-ui/core";
import {useCart} from '../../../hooks/useCart'
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
  const {addItem}=useCart();
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
        {
          Array(20).fill({title:'ADONI BROWN GROOVED',amount:80}).map((item,index)=> <Grid key={index} item style={{ marginTop: "50px" }}>
          <Box className={classes.root}>
            <Paper variant="outlined" className={classes.paper}>
              <Avatar
                variant="square"
                style={{ width: "100%", height: "100%" }}
              >
                h
              </Avatar>
            </Paper>
        <Box className={classes.title}>{item.title}</Box>
        <Box className={classes.price}>Rs {item.amount}/square feet</Box>
            <Box className={classes.buttonGrid}>
              <Button
                color="secondary"
                variant="contained"
                size="small"
                className={classes.button}
                onClick={()=>addItem({id:index,...item})}
              >
                Add Cart
              </Button>
              <Button
                color="secondary"
                variant="contained"
                size="small"
                className={classes.button}
              >
                Buy Now
              </Button>
              <Button
                color="secondary"
                variant="contained"
                size="small"
                className={classes.button}
              >
                Know More
              </Button>
            </Box>
          </Box>
        </Grid>
)
        }
             </Grid>
      <div style={{ marginTop: "50px", padding: "70px" }}>
        <Button className={classes.Btn} size="small">
          Load more
        </Button>
      </div>
    </>
  );
}
