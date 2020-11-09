
import React from 'react'
import { Avatar, Box, Button, makeStyles, Paper } from '@material-ui/core'

const useStyles=makeStyles(theme=>({
    root:{display:'flex',flexDirection:'column',alignItems:'center',width: '290px'},
    paper:{width:'100%',
        height: '328px',
        padding:'24px 29px',
        boxShadow: '0 20px 30px 0 rgba(0, 0, 0, 0.16)'},
        image:{height:'100%',width:'100%'},
        title:{width:'100%',padding:'20px 20px 0 0',textTransform:'uppercase',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',fontWeight:'600',fontSize:'24px','&:hover':{overflow:'visible',color:theme.palette.secondary.main}},
        price:{},
        button:{height: '22px',minWidth:'140px'},
        buttonGrid:{display:'flex',gap:'10px',width:'100%',justifyContent:'center',flexWrap:'wrap'}
}));
export default function SlabsCard() {
const classes=useStyles();
    return (
        <Box className={classes.root}>
        <Paper variant='outlined' className={classes.paper}>
            <Avatar variant='square' style={{width:'100%',height:'100%'}}>
                h
                </Avatar>
        </Paper> 
        <Box className={classes.title} >ADONI BROWN GROOVED</Box>
        <Box className={classes.price} >Rs 80/square feet</Box>
        <Box className={classes.buttonGrid} >
            <Button color='secondary' variant='contained' size='small' className={classes.button}>Add Cart</Button>
            <Button color='secondary' variant='contained' size='small' className={classes.button}>Buy Now</Button>
            <Button color='secondary' variant='contained' size='small' className={classes.button}>Know More</Button>
        </Box>
        </Box>   
    )
}
