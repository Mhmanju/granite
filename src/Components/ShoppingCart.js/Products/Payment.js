import React,{useEffect, useState} from 'react'
import { makeStyles, Button, Box } from '@material-ui/core'
import { Link ,useHistory} from 'react-router-dom'
import PopUp from './Popup'
import ShippingForm from './ShippingForm'


const useStyle=makeStyles(theme=>({
    formcontainer:{
        listStyle:'none',
        '& label':{
            display:'block',
            paddingBottom:theme.spacing(1),
            fontWeight:500,
        },
        '& li:first-child':{
    textAlign:'center'
        },
        '& input':{
            padding:theme.spacing(1.2),
            width:'100%',
            borderRadius:'.5rem',border:'.1rem solid #c0c0c0'
    
        },'& input:focus':{
            border:'.1rem solid #ff8000',
            boxShadow: ' 0 0 3px 1px #ff8000'
        },
        '& li':
        {
            padding:theme.spacing(1)
        },
        '& button':{
            borderRadius:'.5rem',
            border:'.1rem solid grey'
        }
    }    
}))

export default function PaymentInfo() {
    const history=useHistory()
    const classes=useStyle();
    const [open,setOpen]=useState(false)
    const onSubmit=async(v)=>{

const options = {
    key: 'rzp_test_XLNXPWH6rHVE2k',
    amount:100* 100,
    name: 'Modicum Payments',
    description: 'Donate yourself some time',
    customer: {
      name: "Gaurav Kumar",
      contact: "9999999998",
      email: "gaurav.kumar@example.com"
    },
    prefill:{ contact: "0987654321",
    email: 'asdfghj@gmail.com'},
    options: {
      checkout: {
        readonly: {
          email: 1,
          contact: 1
        },method:{
          netbanking:true,
          card:false,
          upi:false,
          wallet:false
        }
      }
    },
    handler(response) {
      const paymentId = response.razorpay_payment_id;
    alert("Payment Successful with "+paymentId)
   // dispatch(clearCheckout())
    //history.push('/checkout/success/'+paymentId)
    
    },
theme:{
    color:'#ff8000'
}
   
   
   
  };
  const rzp1 = new window.Razorpay(options);

  rzp1.open();


        }
       

useEffect(()=>{
   
    
})
    return (<>
        <Box display='flex' justifyContent='center'>
        <Box border='.1rem solid #c0c0c0' marginTop='2rem' width='25rem' padding='2rem' borderRadius='.5rem'>
        
            <ul className={classes.formcontainer}>
               <li>
                       <h2>Payment</h2>
                   </li>
                  
                   <li>
                       <label>Amount*</label>
                           <input />
                           <p style={{fontSize:'1rem',color:'red'}}></p>
                  
                   </li>
                   
                   <li>
                       <Button fullWidth disableElevation onClick={onSubmit}  variant='contained' color='secondary'>Proceed </Button>
                   </li>
                  
                   </ul>
        </Box>
        </Box>
        <PopUp open={open} handleClose={setOpen}>
            <ShippingForm/>
        </PopUp>
        </>
    )
}