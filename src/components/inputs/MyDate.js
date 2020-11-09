import React from "react";
import { InputBase, InputLabel, Grid } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import useStyles from "../../styles/inputstyles";
const MyDate = ({ xs, sm, md, label, ...props }) => {
  const classes = useStyles();
  return (
    <Grid item xs={xs || 12} sm={sm || 12} md={md || 12}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <InputLabel className={classes.label}>{label}</InputLabel>
        <DatePicker
          placeholder="2018/10/10"
          format="yyyy/MM/dd"
          {...props}
          TextFieldComponent={(props) => (
            <InputBase className={classes.root} fullWidth {...props} />
          )}
        />
      </MuiPickersUtilsProvider>
    </Grid>
  );
};

export default MyDate;
