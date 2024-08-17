import { ProductType } from "../pages/Home";

export default function ProductCard({product,clickHandler}:{product:ProductType,clickHandler:(id:number)=>void}){

    return <div  className="grid grid-rows-2 gap-10 p-3 border rounded-md justify-center  place-items-center space-y-10 " >
                <img  className=" w-52 h-52 self-center  " src={product.image} alt={`${product.category}-product-image"`} />
                <div className=" flex flex-col   gap-4     ">
                    <p className="text-xl font-semibold">{product.title}</p>
                    <div className="flex ">
                        <span>₹</span>
                        <p className="text-2xl text-gray-800">{Math.ceil(product.price)*10}.00</p>
                     </div>
                    <p>{product.description.length > 150 ? `${product.description.slice(0,150)}......`:product.description}</p>
                    <button onClick={()=>clickHandler(product.id)}  type="button" className="w-max flex gap-2 items-center bg-slate-600 border-slate-600  border-2 py-2 px-3  text-white text-sm font-semibold hover:bg-white hover:text-slate-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 " viewBox="0 0 24 24"><path fill="currentColor" d="M4 22V6h4q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h4v16zm6-16h4q0-.825-.587-1.412T12 4t-1.412.588T10 6m-2 5h2V8H8zm6 0h2V8h-2z"/></svg>
                         ADD TO CART
                    </button>
                </div>
  </div>
  }
  

 