import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import type { TProduct } from "../../../types";
type TProps = {
    product: TProduct;
};
const ProductCard = ({ product }: TProps) => {
    return (
        <div
            key={product._id}
            className='rounded-xl overflow-hidden shadow-md bg-white border border-gray-100 relative'>
            <img
                src={product.image}
                alt='Product image ...'
                className='w-full h-48 object-cover'
            />
            <div className='absolute top-3 left-3 bg-white text-black text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1'>
                {product.category}
            </div>
            <div className='p-4 flex flex-col justify-between h-[calc(100%-192px)]'>
                <Link
                    to={`/product/${product._id}`}
                    className='text-lg font-medium hover:text-blue-500 transition-all duration-300'>
                    {product.title}
                </Link>
                <div className='flex my-1 gap-1'>
                    <Rating
                        style={{ maxWidth: 100 }}
                        readOnly
                        orientation='horizontal'
                        value={product.rating.rate}
                    />
                    <p>{product.rating.rate}</p>
                    <p>({product.rating.count})</p>
                </div>
                <p className='text-black/70 text-sm mt-2 line-clamp-2'>
                    {/* {product.description.slice(0, 100)}... */}
                    {product.description}
                </p>
                <h3 className='text-2xl font-black my-3'>${product.price}</h3>
                <AddToCartButton product={product} />
            </div>
        </div>
    );
};

export default ProductCard;
