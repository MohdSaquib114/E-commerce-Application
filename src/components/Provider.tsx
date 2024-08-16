import  { createContext, useState, ReactNode, useContext } from 'react';

interface CategoryContextType {
    category: string;
    setCategory: (category: string) => void;
}


const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

interface CategoryProviderProps {
    children: ReactNode;
}

export const Provider : React.FC<CategoryProviderProps> = ({ children }) => {
    const [category, setCategory] = useState<string>('');

    return (
        <CategoryContext.Provider value={{ category, setCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};

// Custom hook to use the CategoryContext
export const useCategory = (): CategoryContextType => {
    const context = useContext(CategoryContext);
    if (context === undefined) {
        throw new Error('useCategory must be used within a CategoryProvider');
    }
    return context;
};
