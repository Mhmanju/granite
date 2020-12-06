import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu({data}) {
  return <ul>
    {data?.map(item=>{
if(item.children.length>0){
 // return item.children.map(submenu=><SimpleMenu data={submenu}/>)
}
else{
 return <li style={{textTransform:'uppercase'}}>{item.name}</li>
}
    })}
    </ul>
}

