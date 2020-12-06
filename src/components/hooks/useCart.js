import { createContext, useContext } from 'react'
import {useLocalstorage} from './useLocalstorage'
const Cartcontext=createContext();
export const useCart=()=>{return useContext(Cartcontext)}



export const CartProvider=({children})=>{
    const [cartItems,setCartItems]=useLocalstorage('cart',[])
    const addItem=(item,qty=1)=>{
        let data1=[...cartItems]
           
             const itemexist=data1.find(item1=>item1.id==item.id)
             if(itemexist){
               data1= data1.map(item1=>{
                     if(item1.id==item.id){
                         qty=Math.abs(qty)==1?Number(item1.qty)+qty:qty
                       return  {...item1,qty:qty}
                     }
                     else{return item1;}
                     
                 }
                    
                     )
             }
             else{data1=[...data1,{...item,qty:1}]}        
         
            setCartItems(data1)
           
      
        
     }
     const removeItem=(item)=>{
         let data=[...cartItems]
         data=data.filter(data1=>data1.id!=item.id)
         setCartItems(data)
        
     }    
       
     const {qty,totalAmount}=cartItems.reduce((acc,item)=>{
         const {qty,amount}=item;
             acc.qty+=Number(qty)||0;
             acc.totalAmount+=(Number(amount)*Number(qty))||0
         return acc},{qty:0,totalAmount:0}
     )
     
return <Cartcontext.Provider value={{cartItems,addItem,removeItem,qty,totalAmount}}>
    {children}
    </Cartcontext.Provider>
}