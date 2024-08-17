import { useState } from "react";

export function useToast(){
    const [toast, setToast] = useState({ message: '', visible: false });

    const showToast = (message:string) => {
        setToast({ message,  visible: true });
        setTimeout(() => {
            setToast({ message: '', visible: false });
        }, 3000); // Hide after 3 seconds

    };

    return {showToast,toast}


}