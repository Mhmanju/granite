import {useState,useEffect} from 'react'
const baseurl="http://gmodicum-env.eba-pswsmftk.ap-south-1.elasticbeanstalk.com/"
export const useFetch=(url)=>{
const [data,setData]=useState(null);
const [loading,setLoading]=useState(false);
const [error,setError]=useState(null);

useEffect(async()=>{
    try{
        setLoading(true)
const request=await fetch(baseurl+url);
const response=await request.json();
console.log(response)
setLoading(false);
setData(response)
}catch(e){
    console.log(e)
    setLoading(false)
    setError(e)
}
},url)


return {data,error,loading}

}