import { useEffect, useState } from "react";
import type { TProduct } from "../types";

const useGetProducts = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<TProduct[] | []>([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [sort, setSort] = useState("a-z");
    useEffect(() => {
        (async () => {
            setLoading(true);
            const response = await fetch(
                `http://localhost:5000/products?search=${search}&category=${category}&sort=${sort}`
            );
            const data = await response.json();
            if (data) {
                setProducts(data);
                setLoading(false);
            }
            setLoading(false);
        })();
    }, [search, category, sort]);
    return { products, setProducts, setSearch, setCategory, setSort, loading };
};

export default useGetProducts;
