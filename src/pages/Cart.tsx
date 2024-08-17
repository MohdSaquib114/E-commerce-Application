import { useEffect, useState } from "react";
import Layout from "../components/Layout";

import { CartItemType, useGlobal } from "../components/Provider";

import CartItemCard from "../components/CartItemCard";
import RemoveWindowModal from "../components/RemoveWindowModal";
import { Link } from "react-router-dom";
import { useToast } from "../hook/toast";
import Toast from "../components/Toast";



export default function Cart() {
    const [isModalOpen,setIsModalOpen] = useState(false)
    const [removeItemTitle,setRemoveItemTitle] = useState("")

    const {cartItems,setCartItems} =useGlobal()
    const {toast,showToast} = useToast()
    
    let totalPrice = 0
    let discount = 0
   
    for(let i =0; i < cartItems.length ; i++){
      
           
            totalPrice  +=  cartItems[i]?.totalPrice 
            if(cartItems[i].discountPrice > 0){
                discount += cartItems[i].discountPrice
            }
      
      
    }

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);


    const cartItemRemoveHandler = (title:string) => {
     const items  =   cartItems.filter((cartItem:CartItemType)=>cartItem.title !== title)
     if(items.length > 0){
        setCartItems(items)
        setIsModalOpen(false)
        showToast("PRODUCT REMOVED FROM CART")
     }
    }
    const modalOpenHandler = (title:string) => {
        setRemoveItemTitle(title)
        setIsModalOpen(true)
    }
    const modalCloseHandler = () => {
         setIsModalOpen(false)
    }
  return (
    <Layout>
        { cartItems.length > 0 ?
           
            <div className="w-full p-10 overflow-hidden flex justify-center relative">
                <RemoveWindowModal title={removeItemTitle} isOpen={isModalOpen} cartItemRemoveHandler={cartItemRemoveHandler} modalCloseHandler={modalCloseHandler} />
                <div className=" flex flex-col sm:flex-row w-[80%]">
                    <div className="flex-1 sm:mr-5" > 
                            <div style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}} className="h-[490px] overflow-y-scroll scroll-smooth ">

                                {cartItems.map((cartItem:CartItemType,index:number)=>
                                <CartItemCard key={index}    cartItem={cartItem} modalOpenHandler={modalOpenHandler} />
                            )}
                            </div>
                            <div className="flex justify-end py-2">
                                <button className="bg-slate-600 text-white px-10 py-5 " >Place Order</button>
                            </div>
                    </div>
                    <div className="border h-max order-first sm:order-none mb-10 sm:mb-0">
                        <div className="p-3 border-b">
                            <p>PRICE DETAILS</p>
                        </div>
                        <div className="p-5 space-y-5 border-b ">
                            <div className="flex justify-between">
                                <p>Price ({cartItems.length} items)</p>
                                <p>₹{totalPrice}</p>
                            </div>    

                            <div className="flex justify-between">
                                <p>Discount</p>
                                <p className="text-green-500">-₹{discount}</p>
                            </div>
                            <div className="flex justify-between border-b border-dashed pb-4">
                                <p>Delivery Charges</p>
                                <p>Free</p>
                            </div>
                            <div className="text-gray-800 text-lg font-semibold flex justify-between">
                                <p>Total Amount</p>
                                <p>₹{totalPrice - discount}</p>
                            </div>

                        </div>
                        <div className="p-3">
                            <p>You will save ₹{discount} on this order</p>
                        </div>
                    </div>
                
                    
                </div>
            </div>
          :
        
            <div className="w-full h-full flex justify-center">
                <div className="w-[70%] h-[500px]  rounded-sm mt-10 flex flex-col justify-center items-center gap-5" >
                   <img className="w-44" src="https://autotechengineeringusa.com/sites/default/files/cart-empty.png" alt="" />
                   <div className="space-y-3 text-center">
                      <p className="text-lg">Your cart is empty!</p>
                      <p className="text-xs">Add items to it now.</p>
                   </div>
                   <Link to={'/home'} className="bg-slate-600 text-white px-10 py-3 " >Shop now</Link>
                </div>
            </div>

        }
        {toast.visible && <Toast message={toast.message} />}
    </Layout>
  )
}

