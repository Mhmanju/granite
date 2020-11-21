
import React from 'react';
import { makeStyles,Grid, Avatar } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    
      height: theme.spacing(16),
    },
  },
}));

export default function ProductDetailsLeft({data}) {
  const classes = useStyles();
  const [URL] = React.useState(1);
  

  return (
      <div>
    <div className={classes.root} justify-content="center" style={{ marginTop:"50px" }} >
      
      <MenuImages data={data}/>
     

    </div  >
    <div style={{ marginTop:"50px" }}>
    <p><b>RATING</b></p>
    <p>stars</p>

    <p><b>PRICE</b></p>
    <p>{data.amount}/ square feet</p>

    




    <p><b>Minimum Order Quantity: </b></p>
    <p>2000 Square Feet</p>

    <p><b> GST: </b></p>
    <p> 18%</p>
    <p> Delivery charges extra…</p>

    </div>
    </div>
    
  );
}

function ProductImage(URL) {
  return(
   
    console.log("image")
  )
}
  


const MenuImages = ({data}) => {
  const data1 = [   
    
    
            {
                URL: "https://tse4.mm.bing.net/th?id=OIP.PWg7-OCi85cdoV_VJjFMtgHaHa&pid=Api&P=0&w=300&h=300", 
                num: 1
            },
            {
                URL: "https://tse4.mm.bing.net/th?id=OIP.PkiPJnc5zziuiq2TyQXmqQHaHa&pid=Api&P=0&w=300&h=300", 
                num: 2
            },
            {
              URL: "https://tse2.mm.bing.net/th?id=OIP.YdJRgUPGnznSAiL-S_dyYQHaHc&pid=Api&P=0&w=300&h=300", 
              num: 3
          },
           
   
           
  ];


  return (
    <div >
    <Grid container spacing={4}>
    
    
      {data1.map((item) => (
          <Grid item xs={4}>
         
  <img variant='square' src={data?.productImage} style={{ maxWidth:"90%",height:"166px"}} onClick={ProductImage}/>

    
    </Grid>

    ))}
     
      </Grid>

  
    </div>
  );
}

