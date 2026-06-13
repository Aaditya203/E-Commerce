import React from 'react'
import { Link } from "react-router-dom";

import {Heart, ShoppingCart} from "lucide-react";
import { useShopContext } from '../context/ShopContext';

type ProductCardProps = {
  _id: string;
  name: string;
  price: number;
  image: string[];
  badge?: string;
};


const ProductCard = ({_id,name,price,image,badge}:ProductCardProps) => {
    const { currency } = useShopContext();
  return (
    <Link to={`/product/${_id}`} className='group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200'>
        <div className='relative bg-gray-100 overflow-hidden aspect-4/5'>
            {badge && (
                <span className='absolute top-3 left-3 z-10 px-2 py-1 text-xs font-semibold rounded-md bg-yellow-400'>{badge}</span>
            )}
            <button className='absolute bg-white z-10 rounded-full shadow p-2 top-3 right-3 '>
                <Heart size={18}/>
            </button>
            <img src={image[0]} alt="dress" className='w-full h-full object-cover hover:scale-110 transition duration-300'/>
        </div>
        <div className='relative p-3'>
            <div className='text-gray-800 font-medium line-clamp-2'>{name}</div>
            <p className='mt-1 text-lg font-semibold text-[#087071]'>{currency} {price}</p>
            
        </div>
    </Link>
  )
}

export default ProductCard