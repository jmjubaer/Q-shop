import { useEffect, useState } from "react";
import type { TProduct } from "../types";

const useGetSingleProduct = (id: string) => {
    const [productLoading, setProductLoading] = useState(true);
    const [product, setProduct] = useState<TProduct | null>(null);

    useEffect(() => {
        (async () => {
            setProductLoading(true);
            const response = await fetch(`http://localhost:5000/product/${id}`);
            const data = await response.json();
            if (data) {
                setProduct(data);
                setProductLoading(false);
            }
            setProductLoading(false);
        })();
    }, [id]);
    return { product, productLoading };
};

export default useGetSingleProduct;
