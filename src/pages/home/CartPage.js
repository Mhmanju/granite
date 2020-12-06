import React, { useState } from 'react'
import {Box, Button, Grid, Typography} from '@material-ui/core'
import CartCard from '../../components/home/CartCard'
import { useCart } from '../../components/hooks/useCart'
export default function CartPage() {
    const [data,setData]=useState([])
    const {cartItems,addItem,removeItem,qty,totalAmount}=useCart();
    const {qty:sqty,totalAmount:stotalAmount}=data.reduce((acc,item)=>{
        const {qty,amount}=item;
            acc.qty+=Number(qty)||0;
            acc.totalAmount+=(Number(amount)*Number(qty))||0
        return acc},{qty:0,totalAmount:0}
    )

    
    return (
        <Grid container spacing={4} justify='center'>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
            <Typography variant='h4' >My Shoping cart</Typography>
            </Grid>
            <Grid item xs={12} sm={9}  >
                {cartItems?.map(item=><CartCard product={item} add={addItem} remove={removeItem} select={setData}/>)}
                
                </Grid>
                <Grid item xs={12} sm={3}>
                <Grid container style={{width:'100%',border:'.1rem solid #c0c0c0',borderRadius:`0.5rem`}} spacing={2}>
                <Grid item xs={12}>
    <b>Total Items: {sqty||qty}</b>
            </Grid>
            <Grid item xs={12}>
    <b> Total Amount: {stotalAmount||totalAmount}</b>
            </Grid>
                  <Grid item xs={12}>
                    <Button color='secondary' variant='contained' fullWidth>Proceed</Button>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
            </Grid>
        </Grid>
    )
}
