
export default function RemoveWindowModal({isOpen,modalCloseHandler,cartItemRemoveHandler,title}:{isOpen:boolean,modalCloseHandler:()=>void,cartItemRemoveHandler:(title:string)=>void,title:string}) {
    if(!isOpen) return 
  return (
    <div className="absolute flex justify-center items-center   w-full h-full bg-gray-200/70" >
                <div className="flex  gap-3">

                 <div className="bg-white w-max p-5 space-y-8 ">
                    <p className="text-slate-900">Remove Item</p>
                    <p className="text-slate-500">Are you sure you want to remove this item?</p>
                    <div className="flex justify-between">
                        <button onClick={()=>cartItemRemoveHandler(title)} className="bg-slate-700 px-8 py-2 text-white" type="button">Remove</button>
                        <button onClick={modalCloseHandler} className=" px-8 py-2 border-2" type="button">Cancel</button>
                    </div>
                 </div>
                 <div  className="text-3xl self-start">
                 <p className="cursor-pointer" onClick={modalCloseHandler}>✖</p>
                 </div>
                </div>
            </div>
  )
}
