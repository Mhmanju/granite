import { Avatar, Box, Button, Checkbox, Fab, FormControl, Grid, IconButton, InputBase, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import React from 'react'
const useStyles=makeStyles(theme=>({   
    paper:{padding:'20px',height:'100%'},
}))

export default function CartCard({product,add,remove,select}) {
    const classes=useStyles()
    
const selectedItem=(v)=>{
    select(data=>{
        if(v){
            return [...data,product]
          
        }
        else{
            return data.filter(item=>item.id!=product.id)
        }
    })
}

const addItem=(qty=1)=>{
    select(data=>{
        
            return data.map(item=>{
                if(item.id==product.id){
                    return {...item,qty:Math.abs(qty)==1?Number(item.qty)+qty:qty}
                }
                else{
                    return item;
                }
            })
               
        
    })
 }

    return (
        
        <Grid container spacing={3}>
            <Grid item  sm={1} style={{alignSelf:'center'}}>
            <Checkbox onChange={(e)=>selectedItem(e.target.checked)}/>
            </Grid>
            <Grid item  sm={3}>
            <ImageCard paper={classes.paper} src={product.productImage}/>
            </Grid>
            <Grid item sm={6}>
    <Typography variant='h5'>{product.productName}</Typography>
            <Box my={1}/>
    <Typography variant='subtitle2' color='textSecondary'><b>Amount:</b>{product.amount}</Typography>
            <Box my={1}/>
            <FormControl onChange={(e)=>{add(product,e.target.value);addItem(e.target.value)}}>
            <InputBase variant="outlined" type='number' inputProps={{style:{textAlign:'center'}}} value={product.qty} size='small' style={{width:'190px',textAlign:'center'}}
            endAdornment={<Fab variant='extended' size='small' color='secondary'onClick={()=>{add(product,-1);addItem(-1)}} disabled={product.qty<=1}>-</Fab>} 
            startAdornment={<>Quantity:<Fab variant='extended' size='small' color='secondary'onClick={()=>{add(product,1);addItem(1)}}>+</Fab></>}/>
            </FormControl>
            <Box my={3}/>
            <Button variant='contained' onClick={()=>remove(product)} fullWidth>Remove</Button>
            </Grid>
            <Grid item sm={2}>
            
            <Typography variant='h5'>Price</Typography>
    <Typography variant='h6'>${Number(product.qty)*Number(product.amount)}</Typography>
            </Grid>
            <Grid item xs={12}>
            
           
            </Grid>
        </Grid>
        
    )
}
const ImageCard=({paper,src})=>{
    return(<Paper className={paper}>
        <Avatar variant='square' src={src} style={{height:'100%',width:'100%'}}/>
    </Paper>)
}