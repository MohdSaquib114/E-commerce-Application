

import NavLink from "./NavLink";

export default function Navbar() {
  
  
  

  return (
    <nav className="p-2 px-10 flex justify-between border-b">

      <h1 className="font-bold text-2xl self-center text-gray-700">SHOP ALL</h1>

      <div className="flex  items-center gap-1">
        <NavLink linkName="Home" >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"/></svg>
        </NavLink>
        <NavLink linkName="Cart"  >  
        <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 " viewBox="0 0 24 24"><path fill="currentColor" d="M4 22V6h4q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h4v16zm6-16h4q0-.825-.587-1.412T12 4t-1.412.588T10 6m-2 5h2V8H8zm6 0h2V8h-2z"/></svg>
            <div className=" border-2  rounded-full ml-[-15px] w-max px-1 h-max text-[12px] bg-gray-600 border-white text-white " >25</div>
        </div>

        </NavLink>
      </div>

    </nav>
  )
}



