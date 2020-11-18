import React  from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import InputBase from "@material-ui/core/InputBase";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Box from "@material-ui/core/Box";

import Paper from "@material-ui/core/Paper";

import Button from "@material-ui/core/Button";

import { Grid, FormControl } from "@material-ui/core";


const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    },
    minWidth: 275
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    width: 300,

    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default () => {
  const classes = useStyles();
  return (
    <div>
      <Box display="flex" justifyContent="center">
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="demo-customized-textbox">
            Search Showroom
          </InputLabel>
          <BootstrapInput id="demo-customized-textbox" />
        </FormControl>
        <FormControl>
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="By Distance"
            style={{ marginTop: "30px" }}
          />
        </FormControl>
      </Box>

      <Grid container style={{ marginTop: "50px" }}>
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            style={{
              height: "180px",
              width: "350px",
              marginLeft: "300px",
              backgroundColor: "#D3D3D3"
            }}
          ></Paper>
        </Grid>
        <Grid item xs={6}>
          <div style={{ height: "180px", width: "180px", marginLeft: "50px" }}>
            <span style={{ fontWeight: "bold" }}>XYZ Factory</span>
            <label style={{ marginLeft: "50px", backgroundColor: "#FFFF00" }}>
              1.5km
            </label>
            <div>
              <i
                class="fa fa-star"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
              <i
                class="fa fa-star"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
              <i
                class="fa fa-star"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
              <i
                class="fa fa-star"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
              <i
                class="fa fa-star-half-o"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
            </div>
            <span style={{ fontWeight: "normal", fontSize: "18px" }}>
              Adoni Brown Grooved{" "}
              <span style={{ fontSize: "15px" }}>Rs 80/square feet</span>
            </span>
          </div>
        </Grid>
      </Grid>

      <Grid container style={{ marginTop: "50px" }}>
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            style={{
              height: "180px",
              width: "350px",
              marginLeft: "300px",
              backgroundColor: "#D3D3D3"
            }}
          ></Paper>
        </Grid>
        <Grid item xs={6}>
          <div style={{ height: "180px", width: "180px", marginLeft: "50px" }}>
            <span style={{ fontWeight: "bold" }}>XYZ Factory</span>
            <label style={{ marginLeft: "50px", backgroundColor: "#FFFF00" }}>
              1.8km
            </label>
            <div>
              <i
                class="fa fa-star"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
              <i
                class="fa fa-star"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
              <i
                class="fa fa-star"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
              <i
                class="fa fa-star"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
              <i
                class="fa fa-star-half-o"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
            </div>
            <span style={{ fontWeight: "normal", fontSize: "18px" }}>
              Adoni Brown Grooved{" "}
              <span style={{ fontSize: "15px" }}>Rs 80/square feet</span>
            </span>
          </div>
        </Grid>
      </Grid>

      <Grid container style={{ marginTop: "50px" }}>
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            style={{
              height: "180px",
              width: "350px",
              marginLeft: "300px",
              backgroundColor: "#D3D3D3"
            }}
          ></Paper>
        </Grid>
        <Grid item xs={6}>
          <div style={{ height: "180px", width: "180px", marginLeft: "50px" }}>
            <span style={{ fontWeight: "bold" }}>XYZ Factory</span>
            <label style={{ marginLeft: "50px", backgroundColor: "#FFFF00" }}>
              2.1km
            </label>
            <div>
              <i
                class="fa fa-star"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
              <i
                class="fa fa-star"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
              <i
                class="fa fa-star"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
              <i
                class="fa fa-star"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
              <i
                class="fa fa-star-half-o"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
            </div>
            <span style={{ fontWeight: "normal", fontSize: "18px" }}>
              Adoni Brown Grooved{" "}
              <span style={{ fontSize: "15px" }}>Rs 80/square feet</span>
            </span>
          </div>
        </Grid>
      </Grid>

      <Grid container style={{ marginTop: "50px" }}>
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            style={{
              height: "180px",
              width: "350px",
              marginLeft: "300px",
              backgroundColor: "#D3D3D3"
            }}
          ></Paper>
        </Grid>
        <Grid item xs={6}>
          <div style={{ height: "180px", width: "180px", marginLeft: "50px" }}>
            <span style={{ fontWeight: "bold" }}>XYZ Factory</span>
            <label style={{ marginLeft: "50px", backgroundColor: "#FFFF00" }}>
              2.5km
            </label>
            <div>
              <i
                class="fa fa-star"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
              <i
                class="fa fa-star"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
              <i
                class="fa fa-star"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
              <i
                class="fa fa-star"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
              <i
                class="fa fa-star-half-o"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
            </div>
            <span style={{ fontWeight: "normal", fontSize: "18px" }}>
              Adoni Brown Grooved{" "}
              <span style={{ fontSize: "15px" }}>Rs 80/square feet</span>
            </span>
          </div>
        </Grid>
      </Grid>

      <Grid container style={{ marginTop: "50px" }}>
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            style={{
              height: "180px",
              width: "350px",
              marginLeft: "300px",
              backgroundColor: "#D3D3D3"
            }}
          ></Paper>
        </Grid>
        <Grid item xs={6}>
          <div style={{ height: "180px", width: "180px", marginLeft: "50px" }}>
            <span style={{ fontWeight: "bold" }}>XYZ Factory</span>
            <label style={{ marginLeft: "50px", backgroundColor: "#FFFF00" }}>
              3.5km
            </label>
            <div>
              <i
                class="fa fa-star"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
              <i
                class="fa fa-star"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
              <i
                class="fa fa-star"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
              <i
                class="fa fa-star"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
              <i
                class="fa fa-star-half-o"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
            </div>
            <span style={{ fontWeight: "normal", fontSize: "18px" }}>
              Adoni Brown Grooved{" "}
              <span style={{ fontSize: "15px" }}>Rs 80/square feet</span>
            </span>
          </div>
        </Grid>
      </Grid>

      <Grid container style={{ marginTop: "50px" }}>
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            style={{
              height: "180px",
              width: "350px",
              marginLeft: "300px",
              backgroundColor: "#D3D3D3"
            }}
          ></Paper>
        </Grid>
        <Grid item xs={6}>
          <div style={{ height: "180px", width: "180px", marginLeft: "50px" }}>
            <span style={{ fontWeight: "bold" }}>XYZ Factory</span>
            <label style={{ marginLeft: "50px", backgroundColor: "#FFFF00" }}>
              4.5km
            </label>
            <div>
              <i
                class="fa fa-star"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
              <i
                class="fa fa-star"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
              <i
                class="fa fa-star"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
              <i
                class="fa fa-star"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
              <i
                class="fa fa-star-half-o"
                aria-hidden="true"
                style={{ color: "#FFFF00" }}
              ></i>
            </div>
            <span style={{ fontWeight: "normal", fontSize: "18px" }}>
              Adoni Brown Grooved{" "}
              <span style={{ fontSize: "15px" }}>Rs 80/square feet</span>
            </span>
          </div>
          <div style={{ marginTop: "70px", padding: "50px" }}>
            <Button
              variant="contained"
              size="small"
              style={{ backgroundColor: "#FFFF00" }}
            >
              Load more
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
