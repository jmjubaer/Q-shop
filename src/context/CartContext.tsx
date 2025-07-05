import { createContext } from "react";
import type { TCartItem } from "../types/cart.type";

export interface TCartProviderValues {
    handleReFetch: () => void;
    cartItems: TCartItem[];
    loading: boolean;
    setCartItems: React.Dispatch<React.SetStateAction<TCartItem[]>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartContext = createContext<TCartProviderValues | undefined>(
    undefined
);
