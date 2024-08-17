import { useEffect } from "react";
import CheckboxGroup from "../components/CheckBoxGroup";
import Layout from "../components/Layout";

import ProductCard from "../components/ProductCard";
import { CartItemType, useGlobal } from "../components/Provider";
import { useFetchData } from "../hook/dataFetch";
import { useToast } from "../hook/toast";
import Toast from "../components/Toast";

export type ProductType = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    totalPrice?:number,
    discountPrice?:number,
    rating: {
        rate: number,
        count: number
    }
}


export default function Home() {

    const {category,cartItems,setCartItems} = useGlobal()
    const {data,loading} = useFetchData<ProductType[]>(category)
    const {toast,showToast}  = useToast()

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);


    function clickHandler(id:number){
        
        const product = data?.filter((product:ProductType)=>product.id === id)
        if(product !== undefined && product.length > 0)
        { 
            const productExist = cartItems.filter((cartIem:ProductType )=> cartIem.title === product[0].title)
            if(productExist.length > 0 ){
                showToast("PRODUCT ALREADY IN  CART")
                return
            }
            product[0].discountPrice = 0
            product[0].totalPrice = 0

           setCartItems([...cartItems,product[0] as CartItemType])
           showToast("PRODUCT ADDED TO CART")
        }else{
            alert("")
            showToast("PRODUCT NOT FOUND")
        }
     
    }
  
  
  return (
    <Layout>
        {/* <Navbar  /> */}
      <div>
        <div className="p-1 text-sm text-center bg-slate-600 text-white">
            <p>Get 20% discount on product having price above ₹1000/-</p>
        </div>
     
        <CheckboxGroup />
        <div>
           {loading ?
            <div className="h-screen flex justify-center items-center">
                <p>Loading Please Wait</p>
            </div>
             :
            <div className="p-7 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 shadow ">
            {data && data.map((product)=>
               <ProductCard product={product} clickHandler={clickHandler} />
                )}
            </div> }
        </div>
      </div>
      {toast.visible && <Toast message={toast.message}  />}
    </Layout>
  )
}


