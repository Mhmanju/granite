import React, { useState } from 'react'
import { Avatar, Box, Button, Dialog, DialogContent, FormControl, FormLabel, makeStyles, TextField, Toolbar, Typography } from '@material-ui/core'
import logo from '../../../Assets/images/logo.png'
 const useStyles=makeStyles(theme=>({
     root:{
         '& .MuiDialog-paper ':{maxWidth:'100%',position:"absolute",top:'0'},
         '& .MuiDialogContent-root':{
            padding:'0 !important',
           
        },
        '& .MuiFormLabel-root':{paddingTop:theme.spacing(2),paddingBottom:theme.spacing(1)}
        

     },
     contentBorder:{
           
        border:`12px solid ${theme.palette.grey[500]}`,
    },
    content:{
        padding:theme.spacing(3),
        border:`5px solid ${theme.palette.secondary.main}`
    }
    
 }))

export default function PopUp({open,handleClose,children}) {
    const [isOpen,setIsOpen]=useState(false);

    const handleOpen=()=>setIsOpen(true)
   // const handleClose=()=>setIsOpen(false)
   const classes=useStyles()
    return (
        <Dialog open={open} onClose={handleClose} className={classes.root} >
            <DialogContent >
                <Box className={classes.contentBorder}>
                    <Box className={classes.content}>
                    <Typography style={{textAlign:'right',cursor:'pointer'}} onClick={handleClose}>X</Typography>
                   <Toolbar style={{display:'flex',justifyContent:'center'}}>
                    <Avatar src={logo} variant='square' style={{width:'100%',height:'auto',maxWidth:'320px',objectFit:'contain'}} />
                    </Toolbar>
                    {children}
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

