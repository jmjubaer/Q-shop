import { createContext, useState } from "react";
import type { TCartItem } from "../types/cart.type";
interface TCartProviderValues {
    cartItems: TCartItem[];
    loading: boolean;
    setCartItems: React.Dispatch<React.SetStateAction<TCartItem[]>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const CartContext = createContext<TCartProviderValues | undefined>(undefined);
const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<TCartItem[]>([]);
    return (
        <CartContext.Provider
            value={{ cartItems, loading, setLoading, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
