import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import AddToCartButton from "../../shered/ui/AddToCartButton";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "../../shered/ui/ProductCard";
import { useEffect } from "react";
import useGetSingleProduct from "../../../hooks/useGetSingleProduct";
import type { TProduct } from "../../../types";
import useGetRelatedProduct from "../../../hooks/useGetRelatedProduct";

const ProductDetails = () => {
    const { id } = useParams();
    const { product } = useGetSingleProduct(id as string);
    const { relatedProducts } = useGetRelatedProduct(
        product?.category as string
    );
    const router = useNavigate();
    useEffect(() => {
        window.scroll(0, 1);
    }, [id]);
    const {
        category,
        description,
        image,
        price,
        rating,
        specifications,
        title,
    } = product || {};
    return (
        <>
            <div className='container grid lg:grid-cols-2 items-center gap-7 my-10'>
                <div className=''>
                    <img
                        src={image}
                        alt='Product image'
                        className='w-full object-cover h-full rounded-2xl max-h-[80vh]'
                    />
                </div>
                <div className=''>
                    <span className='bg-gray-200 text-black text-xs font-medium px-2.5 py-1 rounded-full w-fit'>
                        {category}
                    </span>
                    <h2 className='text-3xl my-5 font-medium hover:text-blue-500 transition-all duration-300'>
                        {title}
                    </h2>
                    <div className='flex my-3 gap-1'>
                        <Rating
                            style={{ maxWidth: 100 }}
                            readOnly
                            orientation='horizontal'
                            value={rating?.rate as number}
                        />
                        <p>{rating?.rate}</p>
                        <p>({rating?.count} reviews)</p>
                    </div>
                    <div className=''>
                        {specifications?.map((specification) => (
                            <div className='flex items-center flex-wrap gap-3 my-1'>
                                <h3 className='text-lg font-medium'>
                                    {specification.name}:
                                </h3>
                                <p>{specification.specification}</p>
                            </div>
                        ))}
                    </div>
                    <h3 className='text-2xl font-black my-3'>${price}</h3>
                    <h3 className='font-medium text-lg'>Description:</h3>
                    <p className='mb-5'>{description}</p>
                    <div className='grid sm:grid-cols-2 gap-3'>
                        <button
                            className='flex items-center justify-center gap-5 border rounded-md border-gray-300 py-2 bg-white cursor-pointer'
                            onClick={() => router("/")}>
                            <FaArrowLeftLong /> Back to shopping
                        </button>
                        <AddToCartButton product={product as TProduct} />
                    </div>
                </div>
            </div>
            <div className='container'>
                <h2 className='text-3xl font-semibold'>Related Products</h2>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-5'>
                    {relatedProducts.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
