import { makeStyles } from '@material-ui/core'
import { Repeat } from '@material-ui/icons'
import React from 'react'
import SlabsCard from '../../components/home/SlabsCard'

const useStyles=makeStyles(theme=>({
    root:{
        
        display:'grid',
        gridTemplateColumns:'repeat(4,1fr)',
        gridGap:'43px',
        justifyContent:'center',
        
        
    }
}))

export default function ProductListPage() {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            {
                Array(20).fill(0).map(item=><SlabsCard/>)
            }
        </div>
    )
}
