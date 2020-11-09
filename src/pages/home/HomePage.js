import { Avatar, Container, Fab, makeStyles } from "@material-ui/core";
import { NoEncryption } from "@material-ui/icons";

import React from "react";
import MyCarosal from "../../components/home/MyCarosal";
import myimage from "../images/sunbscribe.png";
const useStyles = makeStyles((theme) => ({
  carosal1: {
    marginTop: "53px",
    marginBottom: "53px",
    width: "100%"
  }
}));
export default () => {
  const classes = useStyles();
  return (
    <>
      <MyCarosal className={classes.carosal1} />
      <MyCarosal />
      <MyGrid/>
      <Chooseus/>
       <ProductsToday/>
      <Subcribe/> 
    </>
  );
};

 const MyGrid=()=>{
   return(<div style={{display:'grid',gridTemplateColumns:'repeat(8,131px)',gridGap:'27px',marginTop:'88px'}}>
{
  Array(24).fill(10).map(item=><div style={{height:'224px',backgroundColor:'#d8d8d8'}}></div>)
 }
   </div>)
 }

 const Chooseus=()=>{
   const style={
    height: '40px',
    fontFamily: 'Poppins',
    fontSize: '29px',
    fontWeight: 300,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.48,
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#000000',
    paddingBottom:'53px'
  }
   return(<div>
     <p style={style}>Why should you choose us?</p>
     <div style={{display:'flex',justifyContent:'space-between'}}>
      <ContactUsDetail image={'h'} title={"Xxxxxxxxx. Xxxxx"} detail={'All purchases over $399 are eligible for free shipping via UPS Pack and Ship.'}/>
      <ContactUsDetail image={'h'} title={"Xxxxxxxxx. Xxxxx"} detail={'All purchases over $399 are eligible for free shipping via UPS Pack and Ship.'}/>
      <ContactUsDetail image={'h'} title={"Xxxxxxxxx. Xxxxx"} detail={"If an item arrived damaged or you've changed your mind, you can send it back for a full refund."}/>
      <ContactUsDetail image={'h'} title={"Xxxxxxxxx. Xxxxx"} detail={"Designed to last, each of our products has been crafted with the finest materials."}/>
       </div>
   </div>)
 }

 const ContactUsDetail=({image,title,detail})=>{
   return(<div style={{width:'230px'}}>
     <Avatar variant='square' colo=''>{image}</Avatar>
     <b style={{display:'block',paddingTop:'43px'}}>{title}</b>
     <small style={{display:'block',paddingTop:'20px',lineHeight:'24px'}}>{detail}</small>
   </div>)
 }

 const ProductsToday=()=>{
   return(<div style={{textAlign:'center'}}>
  
    <center> <div  className={'Rectangle-762'}><p className='Products-in-today'>Products in today</p></div></center>
   <div style={{display:'flex',justifyContent:'space-between',marginTop:'78px'}}>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
   </div>
   </div>)
 }

 const ProductCard=()=>{
   return(<div style={{borderTop:'11px solid black',width:'272px',height:'300px'}}>
     <div style={{height:'245px',backgroundColor:'#f0f0f0'}}></div>
     <div style={{backgroundColor:'black',color:'white',height:'47px'}}>text</div>
   </div>)
 }

 const Subcribe=()=>{
   
  return (<div style={{height:'243px',marginTop:'139px',marginBottom:'91px',backgroundImage:`url(${myimage})`,display:'flex',alignItems:'center',justifyContent:'space-around'}}>
<p style={{width:'40%',fontSize:'29px',lineHeight:1.31,color:"white"}}>Subscribe to our newsletter and
receive exclusive offers every week</p>
<div>
<input placeholder='Enter Email...' style={{ width: '315px',
  margin:'0 25px',
  padding:'0 15px',
  height: '48px',
  borderRadius: '30px',
  backgroundColor: '#ffffff',outline:'none',border:'none'}}/>
<Fab variant="extended"  color="secondary">
  
  subscribe
</Fab>
</div>
     </div>)
 }