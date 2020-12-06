import { Box, Dialog, DialogContent, DialogTitle, IconButton, makeStyles } from '@material-ui/core'
import { Close } from '@material-ui/icons';
import React from 'react'
const useStyles=makeStyles(theme=>({
    paper:{
        border:`15px solid ${theme.palette.grey[400]}`,
        padding:0,
        margin:0,
    },
    content:{
        margin:0,
        display:'flex',
        flexDirection:'column',
        border:`5px solid ${theme.palette.secondary.main}`
    },
    logo:{
        gridArea:'l'
    },close:{
        justifySelf:'flex-end'
    },
    form:{
        gridArea:'f'
    }
}))
export default function Register({open,setOpen}) {
    const classes=useStyles();
    return (
        <Dialog onClose={()=>setOpen(!open)} open={open} maxWidth='md' fullWidth style={{position:'relative',top:'0px'}}>
            
           <DialogContent className={classes.paper}>
                <Box className={classes.content}>
                    <IconButton className={classes.close}><Close/></IconButton>
                </Box>
               </DialogContent> 
        </Dialog>
    )
}
