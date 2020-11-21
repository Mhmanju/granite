import React, { useState } from 'react'

export default function useForm(initialValues) {
const [values,setValues]=useState(initialValues)
const handleChange=(e)=>{
    const {name,value}=e.target
    setValues(v=>({...v,[name]:value}))
}

const handleSubmit=(e,callback)=>{
e.preventDefault()
callback();
console.log(values);
}


    return {values,handleChange,handleSubmit}
        
    
}
