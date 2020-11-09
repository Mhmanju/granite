import React, { useState } from 'react'
import { Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, useMediaQuery, useTheme } from '@material-ui/core'
import { MailOutline } from '@material-ui/icons'
const useStyles=makeStyles(theme=>({
root:{
  color:theme.palette.primary.contrastText,
  maxWidth:'360px',
  width:'250px',
  minHeight:'100vh',
  backgroundColor:theme.palette.primary.main,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  '& .MuiDivider-root':{
    backgroundColor:theme.palette.primary.contrastText,
    opacity:.7,
    height:'.8px'
  }
},drawerclose:{
  color:theme.palette.primary.contrastText,
  minHeight:'100vh',
  maxWidth:'360px',
  width:theme.spacing(9),
  backgroundColor:theme.palette.primary.main,
transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  },
  ),
  '& .MuiDivider-root':{
    backgroundColor:theme.palette.primary.contrastText,
    opacity:.7,
    height:'.8px'
  }
},
offset:theme.mixins.toolbar,
listitemicon:{color:theme.palette.primary.contrastText}
}))
export default function SideBar({open,setOpen}) {
  const classes=useStyles();
  const theme=useTheme();
  const matches=useMediaQuery(theme.breakpoints.down('xs'))
  

    return (
      <>
      <Drawer
      open={open}
      variant={matches?'temporary':'permanent'}
      onClose={()=>setOpen(!open)}
      >
        <div className={open?classes.root:classes.drawerclose} >
          <div className={classes.offset}></div>
          <List component='nav'>
            <ListItem button component='a' color='inherit' divider>
              <ListItemIcon className={classes.listitemicon}><MailOutline /></ListItemIcon>
              <ListItemText>Mail</ListItemText>
              </ListItem>
              <Divider light/>
              <ListItem button component='a' color='inherit' divider>
              <ListItemIcon className={classes.listitemicon}><MailOutline /></ListItemIcon>
              <ListItemText>Mail</ListItemText>
              </ListItem>
              <Divider light/>
              <ListItem button component='a' color='inherit' divider>
              <ListItemIcon className={classes.listitemicon}><MailOutline /></ListItemIcon>
              <ListItemText>Mail</ListItemText>
              </ListItem>
              <Divider light/>
             </List>
        </div>
        </Drawer>
        </>
    )
}
