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

export default function ProfilePhoto() {
  const classes = useStyles();

  return (
    <div className="ProfPhoto">
    <div className={classes.root}>
     
   
      <Paper  elevation={3} style={{width:"181px",height:"227px",backgroundColor:"grayscale"}}/>
      </div>
    </div>
  );
}
