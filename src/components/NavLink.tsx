
import { useNavigate } from "react-router-dom"


export default function NavLink({children,linkName}:{children:React.ReactNode,linkName:string}){

    
    const navigate = useNavigate()

    

    return     <div onClick={()=> navigate(`/${linkName.toLowerCase()}`)}  className={` hover:bg-slate-100  cursor-pointer flex items-center  gap-1 py-1  px-4 rounded-md   `}>

                    {children}
                    <p className=" font-semibold self-center">{linkName}</p>

                </div>
}