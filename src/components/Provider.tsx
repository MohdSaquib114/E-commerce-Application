import  { createContext, useState, ReactNode, useContext } from 'react';

export type CartItemType = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    totalPrice:number,
    discountPrice:number,
    rating: {
        rate: number,
        count: number
    }
}

interface CategoryContextType {
    category: string;
    setCategory: (category: string) => void;
    cartItems: CartItemType[] ,
    setCartItems: (product:CartItemType[]) => void,
    
}


const GlobalProvider = createContext<CategoryContextType | undefined>(undefined);



export function Provider ({ children }: { children: ReactNode})  {
    const [category, setCategory] = useState<string>('');
    const [cartItems,setCartItems] = useState<CartItemType[]>(() => {
        const saved = localStorage.getItem('cartItems');
        return saved !== null ? JSON.parse(saved) :[]})

    return (
        <GlobalProvider.Provider value={{ category, setCategory,cartItems,setCartItems }}>
            {children}
        </GlobalProvider.Provider>
    );
};

export const useGlobal = (): CategoryContextType => {
    const context = useContext(GlobalProvider);
    if (context === undefined) {
        throw new Error('useCategory must be used within a CategoryProvider');
    }
    return context;
};
