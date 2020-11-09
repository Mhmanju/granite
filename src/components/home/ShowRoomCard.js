import React from 'react'
import { Avatar, Chip, makeStyles, Paper, Typography } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
const useStyles=makeStyles(theme=>({
    root:{
        display:'flex',
        alignItems:'start',
        justifyContent:'space-between',
        padding:'20px 0'
    },
    distance:{fontWeight:'bold',borderRadius:0,marginTop:'15px'},
    paper:{padding:'20px',height:'320px',width:'600px'},
    details:{
        '& .companyName':{paddingBottom:'15px'

        }
    }
}))
export default function ShowRoomCard() {
    const classes=useStyles()
    return (
        <div className={classes.root}>
          <ImageCard paper={classes.paper}/>
          <Details details={classes.details}/>
          <Distance distance={classes.distance}/>  
        </div>
    )
}

const ImageCard=({paper})=>{
    return(<Paper className={paper}>
        <Avatar variant='square' style={{height:'100%',width:'100%'}}/>
    </Paper>)
}
const Details=({details})=>{
    return(<div className={details}>
        <Typography variant='h5' className={'companyName'}>XYZ Company</Typography>
        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
        <Typography variant='subtitle1' color='textPrimary'>ADONI BROWN GROOVED</Typography>
        <Typography variant='subtitle2' color='textSecondary'>Rs 80/square feet</Typography>
    </div>)
}
const Distance=({distance})=>{
    return( <Chip
        size='small'
        label="1.5Km"
        
        color="secondary"
        className={distance}
      />)
}

