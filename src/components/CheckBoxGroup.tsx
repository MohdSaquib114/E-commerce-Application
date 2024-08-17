import { useState } from "react"
import { useGlobal } from "./Provider";

type CheckBoxStateType = {
   name:string,
   checked:boolean
}


const initialState = [
    {name:"All",checked:true,},
    {name:"Electronics",checked:false,},
    {name:"Jewelery",checked:false,},
    {name:"Men's clothing",checked:false,},
    {name:"Women's clothing",checked:false,},

]

const CheckboxGroup = () => {
 
    const [checkedItems,setCheckedItems] = useState<CheckBoxStateType[]>(initialState)
    const { setCategory } = useGlobal()
 
const handleCheckboxChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name }:{name:string,checked:boolean} = event.target;
   
    const newState = checkedItems.map(items=>{
        if(items.name === name ) {
            
            return {name:items.name, checked:true}
        }
        else return {name:items.name, checked:false}
    })
    
    setCheckedItems([...newState]);
    if(name !== "All" ) setCategory(name.toLowerCase())
        else setCategory("")
    
  };

 


 

  return (
    
  <div className="flex flex-wrap  gap-5  p-3 border">
    {
        checkedItems.map((items,index)=>
            <label className="flex gap-1" key={index} > 
                        <input
                            type="checkbox"
                            name={items.name}
                            checked={items.checked}
                            onChange={handleCheckboxChange}
                            />
                            {items.name}
</label>  
        )
    }
   
    
  </div>
   
  );
};

export default CheckboxGroup;
