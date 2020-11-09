import React from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  makeStyles,
  Toolbar
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";

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
      <AppBar>
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
    "HOME",
    "PRODUCTS",
    "SUPPLIERS",
    "STONE LIBRARY",
    "PRICE LISTS",
    "QUARRIES",
    "BUYINGS",
    "REQUESTS",
    "CONTACT US"
  ];
  return (
    <Box display="flex">
      {data.map((item, i) => (
        <Box
          whiteSpace="nowrap"
          fontWeight="500"
          borderRight={i == data.length - 1 ? "" : "3px solid white"}
          paddingRight="10px"
          paddingLeft="10px"
        >
          {item}
        </Box>
      ))}
    </Box>
  );
};

const User = () => {
  return (
    <Box marginLeft="15px">
      <Badge badgeContent={4} color="secondary">
        <Avatar>
          <ShoppingCartRoundedIcon color="primary" />
        </Avatar>
      </Badge>
    </Box>
  );
};
