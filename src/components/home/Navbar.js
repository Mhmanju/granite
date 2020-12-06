import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  makeStyles,
  Toolbar
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {Link, NavLink, useHistory} from 'react-router-dom'
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import PopUp from "../PopUp";
import LoginForm from "../forms/LoginForm";
import RegisterForm from "../forms/RegisterForm";
import {useCart} from '../hooks/useCart'
import ForgotPasswordForm from "../forms/ForgotPassword";

const useStyles = makeStyles((theme) => ({
  fix: theme.mixins.toolbar,
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  menu:{
    color:theme.palette.primary.contrastText,
    cursor:'pointer',
    '&:hover':{
      color:theme.palette.secondary.main
    }
  },
  active:{ color:theme.palette.secondary.main},
  logo: {
    backgroundColor:theme.palette.primary.main,
    color:theme.palette.secondary.main,
    textTransform:'uppercase',
    overflow:'hidden',
    width: "100%",
    maxWidth:'267px',
    height: "65px",
    objectFit: "contain",
    [theme.breakpoints.down('sm')]:{
      flex:1
    }
  },
  list:{
    width:'250px'
  }
}));
export default (props) => {
  const classes = useStyles();
  const [open,setOpen]=useState(()=>false);
  return (
    <div>
      <AppBar>
        <Toolbar variant="dense">
          <Hidden mdUp>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={()=>setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          </Hidden>
          <Avatar variant='square'  alt="logo" className={classes.logo} >
            MY Store
            </Avatar>
            
          <Box flexGrow="1" />
          <Hidden smDown>
          <MenuItems classes={classes}/>
          </Hidden>
          <Login/>
          <User />
        </Toolbar>
      </AppBar>
      <div className={classes.fix} />
      <Hidden mdUp>
      <MyDrawer classes={classes} open={open} setOpen={setOpen}/>
      </Hidden>
    </div>
  );
};
const mystyles=makeStyles(theme=>({
root:{
  position:'relative',
  '& .active~ul':{
    display:'block',
    right:0,
    width:'200px',
  //  border:'2px solid #cecece',
  borderRadius:'.5rem',
    backgroundColor:'white',
    zIndex:999,
  }
},
list:{
  position:'absolute',
  display:'none',
  color:'black',
  listStyle:'none',
  margin:0,
  padding:0
,  '& li':{
  //  padding:'.75rem 1rem',
   // borderBottom:'.05rem solid gray'
  },
  '& li:hover':{
  //  backgroundColor:'gray'
  }
  ,'& li:last-child':{
   // border:'none',
   // backgroundColor:'red'

  },
  '& b:hover':{
    color:theme.palette.secondary.main
  }
}
}))
const Login=()=>{
  const classes=mystyles()
  const [open,setOpen]=useState(false)
  const [login,setLogin]=useState(false)
  const [register,setRegister]=useState(false)
  const [forgotPassword,setForgotPassword]=useState(false)
  return(
    <div className={classes.root} onClick={()=>setOpen(false)}>
    <Button variant='contained' className={open && 'active'} size='small' color='secondary' onMouseEnter={()=>setOpen(true)}>
      Login
      </Button>
      <List className={classes.list} >
        <ListItem divider><small style={{textAlign:'left',width:'50%'}}>New?</small> <b style={{textAlign:'right',width:'50%',cursor:'pointer'}} onClick={()=>setRegister(true)}>Register</b></ListItem>
        <ListItem divider><small style={{textAlign:'left',width:'50%'}}>Old?</small> <b style={{textAlign:'right',width:'50%',cursor:'pointer'}} onClick={()=>setLogin(true)}>Login</b></ListItem>
        {/* <ListItem divider>My Profile</ListItem>
        <ListItem divider>home</ListItem>
        <ListItem divider>home</ListItem> */}
      
        </List>
        <PopUp open={login} handleClose={()=>setLogin(false)}><LoginForm/>
        <Button style={{marginTop:'10px'}} fullWidth size='small' onClick={async()=>{await setLogin(false);await setForgotPassword(true)}}>ForgotPassword?</Button>
        </PopUp>
        <PopUp open={register}handleClose={()=>setRegister(false)}><RegisterForm/></PopUp>
        <PopUp open={forgotPassword}handleClose={()=>setForgotPassword(false)}><ForgotPasswordForm/></PopUp>
      
      <div>
        </div>
      </div>
  )

}

const data = [
  {name:"HOME",link:'/'},
  {name:"PRODUCTS",link:'/productList'},
  {name:"SUPPLIERS",link:'/supplier'},
  {name:"STONE LIBRARY",link:'/stonelibrary'},
  {name:"PRICE LISTS",link:'/pricelist'},
  {name:"QUARRIES",link:'/quarries'},
  {name:"BUYINGS",link:'/buyings'},
  {name:"REQUESTS",link:'/request'},
  {name:"CONTACT US",link:'/contact'}
 
];
const MenuItems = ({classes}) => {
  
  return (
    <Box display="flex" overflow='auto'>
      {data.map((item, i) => (
        <Box
          className={classes.menu}
          whiteSpace="nowrap"
          fontWeight="500"
          borderRight={i == data.length - 1 ? "" : "3px solid white"}
          paddingRight="10px"
          paddingLeft="10px"
          to={item?.link}  activeClassName={classes.active}
          component={NavLink}
        >
        {item?.name}
        </Box>
        
      ))}
    </Box>
  );
};

const User = () => {
  const history=useHistory()
  const {qty}=useCart();
  return (
    <Box marginLeft="10px">
      <Badge badgeContent={qty} color="secondary">
        <Avatar onClick={()=>history.push('/cart')}>
          <ShoppingCartRoundedIcon color="primary" />
        </Avatar>
      </Badge>
    </Box>
  );
};

const MyDrawer=({classes,open,setOpen})=>{
 return <Drawer open={open} onClose={()=>setOpen(false)}>
 <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Granite Mart
        </ListSubheader>
      }
      className={classes.list}
    >
      {
        data?.map((item,i)=><ListItem key={i} to={item.link} activeClassName={classes.active} button component={NavLink}>
        
        <ListItemText primary={item.name} />
      </ListItem>)
      }
      </List>
    </Drawer>

}