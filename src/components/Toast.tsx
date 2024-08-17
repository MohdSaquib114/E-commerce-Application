

export default function Toast({message}:{message:string}) {

  

  return (
    <div className={`fixed rounded-md w-max h-max p-2 bg-slate-600 sm:text-sm text-xs text-white animate-fadIn animate-slideInDown sm:top-[60px] top-[65px] sm:left-[45%] left-[25%]`}>
       {message}
    </div>
  )
}
