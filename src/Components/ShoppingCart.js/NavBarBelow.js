import {
    Box,
    InputBase,
    makeStyles,
    Toolbar,
    Typography
  } from "@material-ui/core";
  import { FilterNone, SearchRounded } from "@material-ui/icons";
  import React from "react";
  import Login from "./../Pages/Login";
  import {Link} from 'react-router-dom';
  import AllDrop from './AllDropdown';
  import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      backgroundColor: "#4b4738",
      height: "43px",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 20px"
    },
    input: {
      width: "765px",
      height: "24px",
      backgroundColor: "#ffffff",
      paddingRight: "10px"
    },
    select: {
      height: "100%",
      margin: 0,
      marginRight: "10px",
      outline: "none",
      border: "none",
      
    }
  }));
  
  export default () => {
    const classes = useStyles();
    return (
      <Box variant="dense" className={classes.root}>
        <SearchBar classes={classes} />
        <MenuItems />
      </Box>
    );
  };
  
  const SearchBar = ({ classes }) => {
    return (
      <InputBase
        startAdornment={
          <select className={classes.select} style={{ backgroundColor:"#fbc936" }}>
            <option>All</option>
          </select>
        }
        className={classes.input}
        endAdornment={<SearchRounded />}
      />
    );
  };
  
  
  const MenuItems = () => {
    return (
      <Box
        display="flex"
        flexGrow="1"
        color="white"
        justifyContent="space-around"
      >
       
        <div><Login /></div>
        
    
       <Link to="/Profile"><Typography   style={{ color:"white" }}>PROFILE <ArrowDropDownIcon  /></Typography></Link> 
       <Link to="/Cart"><Typography style={{ color:"white" }}>ORDERS<ArrowDropDownIcon/></Typography></Link>
       <Link to="/"><Typography style={{ color:"white" }}>RETURNS&REFUNDS<ArrowDropDownIcon/></Typography></Link>
      </Box>
    );
  };
  