import { makeStyles } from '@material-ui/core'
import { Repeat } from '@material-ui/icons'
import React from 'react'
import SlabsCard from '../../components/home/SlabsCard'
import { useFetch } from '../../components/hooks/useFetch'

const useStyles=makeStyles(theme=>({
    root:{
        
        display:'flex',
        flex:'1 1 10rem',
        flexWrap:'wrap',
        gap:'43px',
        justifyContent:'center'
        
        
    }
}))

export default function ProductListPage() {
    const classes=useStyles();
    const [product,error,loading]=useFetch('product')
    return (
        <div className={classes.root}>
            {
                product?.map((item,index)=><SlabsCard product={item}/>)
            }
        </div>
    )
}
