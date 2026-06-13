import type { Product } from "./product";
export interface ShopContextType {
    products: Product[];
    currency: string;
    delivery_fee: number;
};