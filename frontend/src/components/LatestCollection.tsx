import React, { useContext, useEffect, useState } from 'react'
import { ShopContext, useShopContext } from '../context/ShopContext'
import Title from './Title';
import type { Product } from '../types';
import ProductCard from './ProductCard';
const LatestCollection = () => {
  const { products } = useShopContext();
  const [latestProducts,setLatestProducts] = useState<Product[]>([]);
  useEffect(()=>{
    setLatestProducts(products.slice(0,10));
  },[])

  return (
    <>
    <div>
        <Title/>
    </div>

    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mt-15'>
      {
        latestProducts.map((item,index)=>(
          <ProductCard key={index} _id={item._id} image={item.image} name={item.name} price={item.price} badge='NEW'/>
        ))
      }
    </div>
    </>
  )
}

export default LatestCollection