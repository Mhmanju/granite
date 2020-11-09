import React, { useState } from 'react'
import SideBar from './SideBar'
import Header from './Header'
export default function Demo({logo}) {
    const [open,setOpen]=useState(true)
    return (
        <div>
            <Header open={open} setOpen={setOpen} logo={logo}/>
            <SideBar open={open} setOpen={setOpen}/>
        </div>
    )
}
