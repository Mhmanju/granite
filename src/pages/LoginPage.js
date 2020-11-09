import React from "react";
import FormBuilder from "../components/inputs";
import { Box, Button, Grid, makeStyles, Paper } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    width: "100%",
    maxWidth: "22rem",
    margin: "0,auto"
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      alignItems="center"
      height="100%"
      justifyContent="center"
    >
      <Paper className={classes.root} variant="outlined">
        <Grid container spacing={2}>
          <FormBuilder xs={12} label="UserName" />
          <FormBuilder xs={12} type="password" label="Password" />
          <Grid item xs={12}>
            <Button
              variant="outlined"
              fullWidth
              color="primary"
              disableElevation
              size="small"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
