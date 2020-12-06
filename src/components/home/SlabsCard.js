
import React from 'react'
import { Avatar, Box, Button, makeStyles, Paper } from '@material-ui/core'
import {useLocalstorage} from '../hooks/useLocalstorage'
import { useCart } from '../hooks/useCart';
const useStyles=makeStyles(theme=>({
    root:{display:'flex',flexDirection:'column',alignItems:'center',maxWidth:'250px',justifyContent:'center'},
    paper:{width:'100%',
        maxHeight: '300px',
        height:'300px',
        padding:'24px 29px',
        boxShadow: '0 20px 30px 0 rgba(0, 0, 0, 0.16)'},
        image:{height:'100%',width:'100%'},
        title:{width:'100%',paddingTop:theme.spacing(1),paddingBottom:theme.spacing(1),textTransform:'uppercase',whiteSpace:'wrap',textAlign:'center',textOverflow:'ellipsis',fontWeight:'600',fontSize:'24px','&:hover':{overflow:'visible',color:theme.palette.secondary.main}},
        price:{paddingBottom:theme.spacing(1)},
        button:{height: '22px',maxWidth:'140px'},
        buttonGrid:{display:'flex',gap:'10px',width:'100%',justifyContent:'center',flexWrap:'wrap'}
}));
export default function SlabsCard({product}) {
const classes=useStyles();
const {addItem}=useCart();
    return (
        <Box className={classes.root}>
        <Paper variant='outlined' className={classes.paper}>
            <Avatar variant='square' src={product.productImage} style={{width:'100%',height:'100%'}}>
                
                </Avatar>
        </Paper> 
    <Box className={classes.title} >{product.productName}</Box>
        <Box className={classes.price} >Rs {product.amount}/square feet</Box>
        <Box className={classes.buttonGrid} >
            <Button color='secondary' variant='contained' size='small' className={classes.button} onClick={()=>addItem(product)}>Add Cart</Button>
            <Button color='secondary' variant='contained' size='small' className={classes.button}>Buy Now</Button>
            <Button color='secondary' variant='contained' size='small' className={classes.button}>Know More</Button>
        </Box>
        </Box>   
    )
}
