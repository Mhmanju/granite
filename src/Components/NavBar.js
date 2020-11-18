import React from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  makeStyles,
  Toolbar,
 
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import {Link, useHistory} from "react-router-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useCart } from "../hooks/useCart";

const useStyles = makeStyles((theme) => ({
  fix: theme.mixins.toolbar,
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  logo: {
    width: "267px",
    height: "65px",
    objectFit: "contain"
  }
}));
export default (props) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar style={{ backgroundColor:"Black" }}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img src={props.logo} alt="logo" className={classes.logo} />
          <Box flexGrow="1" />
          <MenuItems />
          <User />
        </Toolbar>
      </AppBar>
      <div className={classes.fix} />
    </div>
  );
};

const MenuItems = () => {
  const data = [   
    
    
            {
                linkTo: "/", 
                text: "HOME"
            },
            {
                linkTo: "/ProductSelect", 
                text: "PRODUCTS"
            },
            {
              linkTo: "/Cart", 
              text: "SUPPLIERS"
          },
          {
              linkTo: "/", 
              text: "STONE LIBRARY"
          },
          {
            linkTo: "/Payment", 
            text:    "PRICE LISTS"

        },
        {
            linkTo: "ProfileUpdate", 
            text: "QUARRIES"
        },
        {
          linkTo: "/Payment", 
          text: "BUYINGS"
      },
      {
          linkTo: "/ProfileUpdate", 
          text: "REQUESTS"
      },
      {
        linkTo: "/ProfileUpdate", 
        text:    "CONTACT US"

    },
   
           
  ];


  return (
    <div >
   

    {data.map((item) => (
  <Link to={item.linkTo} style={{ whiteSpace:"nowrap",
          fontWeight:"500",
          borderRight:"3px solid white",
          paddingRight:"10px",
          paddingLeft:"10px",
          color:"white"  }}>
    {item.text}
    </Link>
    ))}
    </div>
  );
}
const User = () => {
  const {qty}=useCart()
  const history=useHistory();
  return (
    <Box marginLeft="15px" onClick={()=>history.push('/cart')}>
      <Badge badgeContent={qty} color="secondary">
        <Avatar>
          <ShoppingCartRoundedIcon color="primary" />
        </Avatar>
      </Badge>
    </Box>
  );
};
