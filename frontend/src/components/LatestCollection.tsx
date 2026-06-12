import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
interface Product {
     _id: string;
    name: string;
    description: string;
    price: number;
    image: string[];
    category: string;
    subCategory: string;
    sizes: string[];
    date: number;
    bestseller: boolean;
}
const LatestCollection = () => {
  const { products } = useContext(ShopContext)!;
  const [latestProducts,setLatestProducts] = useState<Product[]>([]);
  useEffect(()=>{
    setLatestProducts(products.slice(0,10));
  },[])
  return (
    <div>
        <Title/>
    </div>
  )
}

export default LatestCollection