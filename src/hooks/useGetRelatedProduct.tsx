import { useEffect, useState } from "react";
import type { TProduct } from "../types";

const useGetRelatedProduct = (category: string) => {
    const [productLoading, setProductLoading] = useState(true);
    const [relatedProducts, setRelatedProducts] = useState<TProduct[] | []>([]);

    useEffect(() => {
        (async () => {
            setProductLoading(true);
            const response = await fetch(
                `http://localhost:5000/related-product?category=${category}`
            );
            const data = await response.json();
            if (data) {
                setRelatedProducts(data);
                setProductLoading(false);
            }
            setProductLoading(false);
        })();
    }, [category]);
    return { relatedProducts, productLoading };
};

export default useGetRelatedProduct;
