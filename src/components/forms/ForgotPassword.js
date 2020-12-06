import React from 'react'
import {  FormControl, FormLabel,TextField,Box,Button, Typography } from '@material-ui/core'

export default function ForgotPasswordForm() {
    return (
        <Box maxWidth='320px'>
        <Typography variant='h4' style={{textAlign:'center'}}>Forgot Password</Typography>
            <form>
                        <FormControl fullWidth>
                            <FormLabel >Email</FormLabel>
                            <TextField variant='outlined' size='small' type='email' />
                            </FormControl>
                           
                            <Box my={3}/>
                            <Button variant='contained' color='secondary' size='medium' fullWidth disableElevation>Forgot Password</Button>
                        </form>
                        </Box>
        
    )
}
