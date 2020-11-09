import React from "react";
import { InputBase, InputLabel, makeStyles, Grid } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import useStyles from "../../styles/inputstyles";
const MyTime = ({ xs, sm, md, label, ...props }) => {
  const classes = useStyles();
  return (
    <Grid item xs={xs || 12} sm={sm || 12} md={md || 12}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <InputLabel className={classes.label}>{label}</InputLabel>
        <TimePicker
          placeholder="HH:MM a"
          TextFieldComponent={(props) => (
            <InputBase
              className={classes.root}
              fullWidth
              {...props}
              placeholder="HH:MM a"
            />
          )}
        />
      </MuiPickersUtilsProvider>
    </Grid>
  );
};

export default MyTime;
