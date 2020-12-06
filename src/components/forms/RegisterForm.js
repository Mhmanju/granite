import React from 'react'
import {  FormControl, FormLabel ,TextField ,Box,Button, Typography} from '@material-ui/core'
import useForm from '../hooks/useForm'

export default function RegisterForm() {
    const {values,handleChange,handleSubmit}=useForm({
        userName:'',
        email:'',
        phone:'',
        password:'',
        confirmPassword:''
    })
    return (
        <Box maxWidth='320px'>
        <Typography variant='h4' style={{textAlign:'center'}}>Register</Typography>
        <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
            <FormLabel >UserName</FormLabel>
            <TextField variant='outlined' size='small' name='userName' value={values.userName} onChange={handleChange} />
            </FormControl>
            <FormControl fullWidth>
            <FormLabel >Email</FormLabel>
            <TextField variant='outlined' size='small' type='email' name='email' value={values.email} onChange={handleChange} />
            </FormControl>
            <FormControl fullWidth>
            <FormLabel >Phone</FormLabel>
            <TextField variant='outlined' size='small' name='phone' value={values.phone} onChange={handleChange} />
            </FormControl>
            <FormControl fullWidth>
            <FormLabel >Password</FormLabel>
            <TextField variant='outlined' size='small' type='password' name='password' value={values.password} onChange={handleChange} />
            </FormControl>
             <FormControl fullWidth>
            <FormLabel >Confirm Password</FormLabel>
            <TextField variant='outlined' size='small' type='password' name='confirmPassword' value={values.confirmPassword} onChange={handleChange}/>
            </FormControl>
            <Box my={3}/>
            <Button type='submit' variant='contained' color='secondary' size='medium' fullWidth disableElevation>Register</Button>
        </form>
        </Box>
    )
}
