import React from "react";
import { Box, makeStyles } from '@material-ui/core'

const useStyles=makeStyles(theme=>({
root:theme.mixins.gutters
}))
export default () => {
  const classes=useStyles();
  return <div className={classes.root}>
    <Box  color='white'>Orders Page</Box></div>;
};
