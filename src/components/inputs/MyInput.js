import React from "react";
import { InputBase, InputLabel, makeStyles, Grid } from "@material-ui/core";
import useStyles from "../../styles/inputstyles";
const MyInput = ({ xs, sm, md, label, ...props }) => {
  const classes = useStyles();
  return (
    <Grid item xs={xs || 12} sm={sm || 12} md={md || 12}>
      <InputLabel className={classes.label}>{label}</InputLabel>
      <InputBase className={classes.root} fullWidth {...props} />
    </Grid>
  );
};

export default MyInput;
