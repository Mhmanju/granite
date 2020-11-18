import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext=createContext();

export const CartProvider=({children})=>{
    
const [cartItems,setCartItems]=useState([]);

useEffect(()=>{
    let data=localStorage.getItem('granitecart')
    data=data?JSON.parse(data):[]
    console.log(data)
    //setCartItems(data)
},[])
const addItem=(item)=>{
   let data1=[...cartItems]
    data1=(data1)=>{
        const itemexist=data1.find(item1=>item1.id==item.id)
        if(itemexist){
          return  data1.map(item1=>{
                if(item1.id==item.id){
                  return  {...item1,qty:Number(item1.qty)+(Number(item.qty)||1),amount:Number(item1.amount)+(Number(item.amount))}
                }
                else{return item1;}
                
            }
               
                )
        }
        else{return [...data1,{...item,qty:1}]}        
    }
       setCartItems(data1)
localStorage.setItem('granitecart',data1)   
    
}
const removeItem=(item)=>{
    let data=[...cartItems]
    data=data.filter(data1=>data1.id!=item.id)
    setCartItems(data)
    localStorage.setItem('granitecart',data) 
}    
  
const {qty,totalAmount}=cartItems.reduce((acc,item)=>{
    const {qty,amount}=item;
        acc.qty+=Number(qty)||0;
        acc.totalAmount+=Number(amount)||0
    return acc},{qty:0,totalAmount:0}
)


    return(<CartContext.Provider value={{cartItems,addItem,removeItem,qty,totalAmount}}>{children}</CartContext.Provider>)
}


 export const useCart=()=> useContext(CartContext)
