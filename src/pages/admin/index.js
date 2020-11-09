import { makeStyles } from '@material-ui/core'
import React from 'react'
import Dashboard from '../../components/dashboard/Demo'
import logo from '../images/logo.png'
export default function index() {

    return (
        <div>
            <Dashboard logo={logo}/>
        </div>
    )
}
