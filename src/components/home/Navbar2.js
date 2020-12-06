import React, { useState } from 'react'
import { makeStyles, Toolbar, useMediaQuery, useTheme } from '@material-ui/core'
import  './submenu.css';
import {data} from './category'
import { useFetch } from '../hooks/useFetch';
const useStyles=makeStyles(theme=>({
root:{
  
  backgroundColor:theme.palette.secondary.main,
  '& ul':{
    listStyle:'none'
  },
  
},
toolbar:{overflow:'visible',
    position:'relative',
  '&>ul':{
    display:'flex',
    //zIndex:1000,
  },
  '& .list>div':{
    position:'absolute',
    
    display:'none'
  },
  
  '& .list.active>div':{
    position:'absolute',
   // margin:'0 20px',
    left:0,
    right:0,
    minHeight:'100vh',
    zIndex:999,
    backgroundColor:theme.palette.primary.main,
    
    color:'white',
    display:'block',
    //border:'2px solid green'
  },
  '& .list.active>div>ul':{
   
    display:'flex',
   // border:'2px solid green'
  }
}
}))

const renderCategories = (categories) => {
  let myCategories = [];
  
  for (let category of categories) {
    
      myCategories.push(
         <Submenu category={category} />
      );
      
  }
  return myCategories;
}
const Submenu=({category})=>{
  const [open,setOpen]=useState(false)
  return  <li className={`list ${open?'active':''}`}  onMouseLeave={()=>setOpen(false)}   key={category.name}>
  {category.parentId ? 
  <a href={`${category.slug}`}>{category.name}</a>
  : <span style={{margin:'0 20px'}} onMouseEnter={()=>setOpen(true)} >{category.name}</span>
  }
  {category.children.length > 0 ? (<div><hr/>{open && <h2>{category.name}</h2>}<ul className='submenu' style={{overflow:'auto'}}>{renderCategories(category.children)}</ul></div>) : null}
</li>
}
export default function Navbar2() {
  
  const classes=useStyles();
  return (
    <div className={classes.root}>
      {/* <Toolbar variant='dense' className={classes.toolbar}>
        <ul style={{overflow:'auto'}}>

        {  renderCategories(data) }
        </ul>
        </Toolbar> */}
        <MenuHeader/>
    </div>
  )
}

const MenuHeader = (props) => {
const [category,error,loading]=useFetch('category')

const theme=useTheme()
const media=useMediaQuery(theme.breakpoints.down("sm"))
  const renderCategories = (categories) => {
      let myCategories = [];
      for (let category of categories) {
          myCategories.push(
              <li key={category.name}>
                  {category.children.length == 0? 
                  <a href={`${category.categoryId}`}>{category.categoryName}</a>
                  : <span>{category.categoryName}</span>
                  }
                  {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
              </li>
          );
      }
      return myCategories;
  }

  return (
      <div className="menuHeader">
          <ul style={{overflowX:`${media?'auto':'none'}`}}>
              {  renderCategories(category||[]) }
          </ul>
      </div>
  )

}