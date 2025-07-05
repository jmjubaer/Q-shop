import { useEffect, useState } from "react";
import type { TCategory } from "../types/category.type";

const useGetCategories = () => {
    const [categoryLoading, setCategoryLoading] = useState(true);
    const [category, setCategory] = useState<TCategory[] | []>([]);

    useEffect(() => {
        (async () => {
            setCategoryLoading(true);
            const response = await fetch(`http://localhost:5000/categories`);
            const data = await response.json();
            if (data) {
                setCategory(data);
                setCategoryLoading(false);
            }
            setCategoryLoading(false);
        })();
    }, []);
    return { category, categoryLoading };
};

export default useGetCategories;
