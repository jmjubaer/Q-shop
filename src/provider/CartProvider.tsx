import { useEffect, useState } from "react";
import type { TCartItem } from "../types/cart.type";
import { CartContext, type TCartProviderValues } from "../context/CartContext";

const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [refetch, setRefetch] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<TCartItem[]>([]);
    const handleReFetch = () => setRefetch(!refetch);
    const value: TCartProviderValues = {
        handleReFetch,
        cartItems,
        loading,
        setCartItems,
        setLoading,
    };
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartItems(data);
    }, [refetch]);
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

export default CartProvider;
