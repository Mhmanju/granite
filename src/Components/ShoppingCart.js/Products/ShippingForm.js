import React from 'react'
import {  FormControl, FormLabel,TextField,Box,Button, Typography } from '@material-ui/core'
import useForm from '../../../hooks/useForm'

export default function ShippingForm({setValue}) {
    const {values,handleChange,handleSubmit}=useForm({
        customerName:'',
        email:'',
        phone:'',
        address:''
    });
 const callback=()=>{
     setValue(values)
 }

    return (
        <Box maxWidth='320px'>
        <Typography variant='h4' style={{textAlign:'center'}}>Customer Details</Typography>
            <form>
            <FormControl fullWidth>
                            <FormLabel >Customer Name</FormLabel>
                            <TextField variant='outlined' size='small' name='customerName' value={values.customerName} onChange={handleChange} />
                            </FormControl>
                            <FormControl fullWidth>
                            <FormLabel >Email</FormLabel>
                            <TextField variant='outlined' size='small' name='email' value={values.email} onChange={handleChange} />
                            </FormControl>
                        <FormControl fullWidth>
                            <FormLabel >Phone</FormLabel>
                            <TextField variant='outlined' size='small' name='phone' value={values.phone} onChange={handleChange} />
                            </FormControl>
                            <FormControl fullWidth>
                            <FormLabel >Address</FormLabel>
                            <TextField multiline rows={4} variant='outlined' size='small' name='address' value={values.address} onChange={handleChange} />
                            </FormControl>

                           
                            <Box my={3}/>
                            <Button variant='contained' color='secondary' size='medium' fullWidth disableElevation onClick={(e)=>handleSubmit(e,callback)}>Proceed</Button>
                        </form>
                        </Box>
        
    )
}
