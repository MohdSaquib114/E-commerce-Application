import {  useState } from "react";

import { CartItemType, useGlobal } from "./Provider";


export default function CartItemCard({cartItem,modalOpenHandler}:{cartItem:CartItemType,modalOpenHandler:(title:string)=>void}){
    const {cartItems,setCartItems} = useGlobal()

    const [productCount,setProductCount] = useState(1)
    cartItem.totalPrice = ((Math.ceil(cartItem.price) * 10) * productCount)
    const totalPrice = cartItem.totalPrice
  
  

        const discountAmount = ( cartItem.totalPrice * 20) / 100;
        cartItem.discountPrice = cartItem.totalPrice - discountAmount;
        const discount = cartItem.discountPrice
       

          
        
  
    
    const countDecreaseHandler = (cartItem:CartItemType) => {
        if(productCount === 1) return
        setProductCount(productCount - 1)
         const newItem = cartItems.map((obj:CartItemType)=>{
            if(cartItem.title === obj.title){
                obj.totalPrice = totalPrice
                obj.discountPrice = discount
                return obj
            }else return obj
         })
        setCartItems([...newItem])
    }
    const countIncreaseHandler = (cartItem:CartItemType) => {
        setProductCount(productCount + 1)
        const newItem = cartItems.map((obj:CartItemType)=>{
            if(cartItem.title === obj.title){
                obj.totalPrice = totalPrice
                obj.discountPrice = discount
                return obj
            }else return obj
         })
        setCartItems([...newItem])

    }

    return <div  >
    <div className="flex  bg-white  p-5 gap-5 border-2 mb-4">
        <div className="space-y-5">
            <img className="w-28 h-28" src={cartItem.image} alt={`${cartItem.category}-product-img`} />
            <div className="flex gap-2 text-center">
                <button type="button" onClick={()=>countDecreaseHandler(cartItem)} className="rounded px-2 py-1 border bg-gray-100 pb-2 hover:bg-gray-200">-</button>
                <p className="border rounded w-full bg-gray-100 pt-1">{productCount}</p>
                <button type="button" onClick={()=>countIncreaseHandler(cartItem)} className="rounded px-2 py-1 border bg-gray-100 pb-2 hover:bg-gray-200">+</button>
            </div>
        </div>
        <div className="flex-1">
            <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between flex-col ">

                    <p className="text-lg font-semibold text-gray-800">{cartItem.title}</p>
                    <p>Delivered in 2- 3 working days | <span className="text-green-700 font-medium">Free</span></p>
                </div>
                <div className="font-medium">
                    {
                    (Math.ceil(cartItem.price) * 10) > 1000
                     ? 
                    <div className="flex gap-3">
                        <p className="line-through">₹{cartItem.totalPrice}</p>
                        <p>₹{cartItem.discountPrice}</p>
                        <p className="text-green-700">20% Off</p>
                    </div>
                    :
                    <div className="flex">
                      <span>₹</span>
                      <p className="">{cartItem.totalPrice}</p>
                    </div>
                    }
                </div>
                <button type="button" className="self-start text-xl font-semibold hover:text-blue-600" onClick={()=>modalOpenHandler(cartItem.title)} >Remove</button>
            </div>
        </div>
    </div>
</div>
}
