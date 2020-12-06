import { useEffect, useState } from "react";

export const useLocalstorage=(key,initialvalues)=>{
    const [state,setState]=useState(()=>{
        let data
        try{
        
            //console.log(data)
            data =JSON.parse(localStorage.getItem(key)) 

        }catch(e){
            
        }
        return data||initialvalues
    })
//console.log(state)

    const handleState=(data)=>{

        if(data){
            setState(()=>{return data})
            localStorage.setItem(key,JSON.stringify(data))
        }
    }

    return [state,handleState];
}