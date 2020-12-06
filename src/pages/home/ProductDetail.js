import { Avatar, Box, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
const usestyles=makeStyles(theme=>({
root:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
}
}))
export default function ProductDetail() {
    const classes=usestyles();

    return (
        <div className={classes.root}>
            <Typography variant='h3'>Black Marble</Typography>
            <Box my={2}/>
            <Grid container spacing={10}>
                <Grid item xs={3}>
                    <Box display='grid' gridTemplateColumns='repeat(3,1fr)' gridGap='12px'>
                        <Avatar variant='square' style={{height:'155px',width:'130px'}}>H</Avatar>
                        <Avatar variant='square' style={{height:'155px',width:'130px'}}>H</Avatar>
                        <Avatar variant='square' style={{height:'155px',width:'130px'}}>H</Avatar>
                        </Box>
                        <Box my={'72px'}/>
                        <Typography>
                        Rating:


Price:  
120 / Square Feet

Minimum Order Quantity: 
2000 Square Feet

GST: 
18%
Delivery charges extra…
                        </Typography>

                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={7}>
                        <Avatar variant='square' style={{width:'100%',height:'300px'}}></Avatar>
                        <Box my={4}/>
                        <Typography style={{textAlign:'justify'}}>
                        Black Marquino Granite is exclusively used in commercial as well as residential establishment. It can be used in interior and exterior application. Black Marquino Granite gives stunning appearance to the interior of house. Primary color of Black Marquino Granite is black with white or grey colour pattern on it. This granite is also used for decoration purpose.

Black Marquino Granite is available as slab and tiles for clients. Thickness of slab is approximately 15mm to 20mm. Tiles are available in size of 1x1 and 2x2. Black Marquino Granite is also known as black marquina Granite. Size and thickness may vary according to the client’s requirement.

GraniMart is largest supplier and manufacturer of Black Marquino Granite slab and tiles in India overseas at lowest price.

Features
Ideal for flooring and kitchen countertop
Available as slab and Tiles
Thickness 15mm to 20mm

Specifications
Water resistant property
Long lasting shine
Highly durable
                        </Typography>
                    </Grid>
                </Grid>
        </div>
    )
}
