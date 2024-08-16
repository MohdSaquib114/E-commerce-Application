// import axios from "axios"
// import { useEffect, useState } from "react"

// export const useFetchData = (url:string) => {
//     const [data,setData] = useState()

//     useEffect(()=>{
//      async  function fetchData(){
//         const {data} = await axios.get(url)
//         setData(data)
//      }
//      fetchData()
//     }
//     ,[url])
  
//     return data
// }

import axios from 'axios';
import { useState, useEffect } from 'react';

interface UseFetchResult<T> {
    data: T | null;
    error: string | null;
    loading: boolean;
}

export const useFetchData = <T,>( category:string ): UseFetchResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
 
    // https://fakestoreapi.com/products/category//women's

    useEffect(() => {
        const fetchData = async () => {
          
            try {
                setLoading(true)
                let url 
                if(category === ""){
                     url = "https://fakestoreapi.com/products"
                }else url = `https://fakestoreapi.com/products/category/${category}`
                const {data} = await axios.get(url);
                
                if (!data) {
                    throw new Error(`Error: Somethin went wrong`);
                }

               
                setData(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [category]);

    return { data, error, loading };
};
