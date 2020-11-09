import { Divider } from '@material-ui/core'
import React from 'react'
import ShowRoomCard from '../../components/home/ShowRoomCard'

export default function ShowRoomListPage() {
    return (
        <>
            <ShowRoomCard/> 
            <Divider style={{height:'5px'}}/>
            <ShowRoomCard/> 
        </>
    )
}
