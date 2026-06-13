import { createContext, useContext } from "react";
import { products } from "../assets/asset";
import type { ShopContextType } from "../types";

export const ShopContext = createContext<ShopContextType | null>(null);

export const useShopContext = () => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error(
      "useShopContext must be used within ShopContextProvider"
    );
  }

  return context;
};

const ShopContextProvider = (props:any)=>{
    const currency:string = '₹';
    const delivery_fee:number = 10;
    const value:ShopContextType = {
        products,currency,delivery_fee
    }

    return (
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
    )
}
export default ShopContextProvider;