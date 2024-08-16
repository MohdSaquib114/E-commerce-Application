import CheckboxGroup from "../components/CheckBoxGroup";
import Layout from "../components/Layout";
import { useCategory } from "../components/Provider";
import { useFetchData } from "../hook/dataFetch";

type ProductType = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}


export default function Home() {
    const {category} = useCategory()
    const {data,loading} = useFetchData<ProductType[]>(category)
   
  
  return (
    <Layout>
      <div>
        <div className="p-1 text-sm text-center bg-slate-600 text-white">
            <p>Get 20% discount on shopping above ₹1000/-</p>

        </div>
        <CheckboxGroup />
        <div>
           {loading ? <div className="h-screen flex justify-center items-center">
             <p>Loading Please Wait</p>
           </div> :
            <div className="p-5 grid grid-cols-3 gap-2 ">

                {data && data.map((product,index)=>
                <div key={index} className="grid grid-cols-5" >
                    <img  className="w-24  " src={product.image} alt={`${product.category}-product-image"`} />
                    <div className="col-span-4   ">
                        <p className="text-xl font-semibold">{product.title}</p>
                        <div className="flex">
                            <span>₹</span>
                            <p className="text-2xl text-gray-800">{Math.ceil(product.price)*10}</p>
                            </div>
                        <p>{product.description.length > 150 ? `${product.description.slice(0,150)}......`:product.description}</p>
                        <button type="button" className="flex gap-2 items-center bg-slate-600 border-slate-600  border-2 py-2 px-3 rounded-md text-white text-sm font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 " viewBox="0 0 24 24"><path fill="currentColor" d="M4 22V6h4q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h4v16zm6-16h4q0-.825-.587-1.412T12 4t-1.412.588T10 6m-2 5h2V8H8zm6 0h2V8h-2z"/></svg>
                        ADD TO CART</button>
                    </div>
                </div>
                )}
            </div> }
        </div>
      </div>
    </Layout>
  )
}
