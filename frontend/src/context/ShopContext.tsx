import { createContext } from "react";
import { products } from "../assets/asset";


type ShopContextType = {
    products: typeof products;
    currency: string;
    delivery_fee: number;
};
export const ShopContext = createContext<ShopContextType | null>(null);


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