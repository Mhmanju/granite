import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(),
      width: theme.spacing(),
      height: theme.spacing(),
    },
  },
}));

export default function CartList() {
  const classes = useStyles();

  return (
      <div className="CartBox">
    <div className={classes.root}>
     
   
      <Paper  elevation={3} />
      </div>
    </div>
  );
}
