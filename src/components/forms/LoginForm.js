import React from 'react'
import {  FormControl, FormLabel,TextField,Box,Button, Typography } from '@material-ui/core'

export default function LoginForm() {
    return (
        <Box maxWidth='320px'>
        <Typography variant='h4' style={{textAlign:'center'}}>Login</Typography>
            <form>
                        <FormControl fullWidth>
                            <FormLabel >Email/Phone</FormLabel>
                            <TextField variant='outlined' size='small' />
                            </FormControl>
                            <FormControl fullWidth>
                            <FormLabel >Password</FormLabel>
                            <TextField variant='outlined' size='small' type='password' />
                            </FormControl>
                            <Box my={3}/>
                            <Button variant='contained' color='secondary' size='medium' fullWidth disableElevation>Login</Button>
                        </form>
                        </Box>
        
    )
}
