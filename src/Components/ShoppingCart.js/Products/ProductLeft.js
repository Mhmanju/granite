
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';


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

export default function ProductDetailsLeft() {
  const classes = useStyles();
  const [URL] = React.useState(1);
  

  return (
      <div>
    <div className={classes.root} justify-content="center" style={{ marginTop:"50px" }} >
      
      <MenuImages/>
     

    </div  >
    <div style={{ marginTop:"50px" }}>
    <p><b>RATING</b></p>
    <p>stars</p>

    <p><b>PRICE</b></p>
    <p>120/ square feet</p>

    




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
  


const MenuImages = () => {
  const data = [   
    
    
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
    
    
      {data.map((item) => (
          <Grid item xs={4}>
         
  <img src={item.URL} style={{ maxWidth:"90%",height:"166px"}} onClick={ProductImage}>

    </img> 
    </Grid>

    ))}
     
      </Grid>

  
    </div>
  );
}

