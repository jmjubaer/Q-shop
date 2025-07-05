import { IoCartOutline } from "react-icons/io5";
import { addToCart } from "../../../utils/addToCart";
import type { TProduct } from "../../../types";
import { useCart } from "../../../hooks/useCart";

const AddToCartButton = ({ product }: { product: TProduct }) => {
    const { handleReFetch } = useCart();
    const handleCart = () => {
        addToCart(product);
        handleReFetch();
    };
    return (
        <button
            onClick={() => handleCart()}
            className='gradient_bg w-full flex items-center text-center justify-center gap-3 z-10 text-white p-2 rounded-md cursor-pointe'>
            <IoCartOutline className='text-xl' /> Add to Cart
        </button>
    );
};

export default AddToCartButton;
