import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
// import Logo from "../../pages/images/logo.png";
import { TextField, Checkbox, Button, Link } from "@material-ui/core";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 1000,
    backgroundColor: theme.palette.background.paper,
    border: "5px solid #fbc936",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function Login() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <img
        src=""
        alt="logo"
        className=""
        style={{ marginLeft: "300px" }}
      />
      <p style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "400px" }}>
        Login
      </p>
      <div style={{ marginLeft: "30px" }}>
        <TextField
          id="outlined-basic"
          placeholder="Name"
          variant="outlined"
          style={{ width: "400px" }}
        />

        <TextField
          id="outlined-basic"
          placeholder="Password"
          variant="outlined"
          style={{ marginLeft: "30px", width: "400px" }}
        />
      </div>

      <div style={{ marginLeft: "330px", marginTop: "30px" }}>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <span style={{ fontSize: "15px" }}>Agree Terms and conditions</span>
      </div>

      <Button
        variant="contained"
        color="primary"
        style={{
          marginLeft: "350px",
          width: "246px",
          height: "39px",
          marginTop: "30px",
          backgroundColor: "#fbc936",
          color: "#000000",
          fontSize: "23px",
          fontWeight: "600"
        }}
      >
        Submit
      </Button>
      <div style={{ marginLeft: "380px", marginTop: "30px" }}>
        <span style={{ fontSize: "15px" }}>New to Granimart?</span>
        <a href="https://www.w3schools.com/">Register here</a>
      </div>
    </div>
  );

  return (
    <div>
      <a onClick={handleOpen}>Login | Register</a>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
