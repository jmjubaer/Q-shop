import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import AddToCartButton from "../../shered/ui/AddToCartButton";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../shered/ui/ProductCard";
const product = {
    id: 1,
    title: "Wireless Bluetooth Headphones",
    price: 79.99,
    description:
        "Premium quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    rating: {
        rate: 4.5,
        count: 120,
    },
    specifications: [
        {
            name: "Brand",
            specification: "SoundPro",
        },
        {
            name: "Model",
            specification: "SPX-900",
        },
        {
            name: "Bluetooth Version",
            specification: "5.0",
        },
        {
            name: "Battery Life",
            specification: "Up to 30 hours",
        },
        {
            name: "Noise Cancellation",
            specification: "Active Noise Cancelling (ANC)",
        },
        {
            name: "Charging Time",
            specification: "Approximately 2 hours",
        },
    ],
};
const products = [
    {
        id: 1,
        title: "Wireless Bluetooth Headphones",
        price: 79.99,
        description:
            "Premium quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
        rating: {
            rate: 4.5,
            count: 120,
        },
    },
    {
        id: 2,
        title: "Smart Fitness Watch",
        price: 199.99,
        description:
            "Advanced fitness tracking with heart rate monitoring, GPS, and 7-day battery life. Track your workouts and health metrics.",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
        rating: {
            rate: 4.3,
            count: 89,
        },
    },
    {
        id: 3,
        title: "Minimalist Leather Wallet",
        price: 45.0,
        description:
            "Handcrafted genuine leather wallet with RFID blocking technology. Slim design with multiple card slots and bill compartment.",
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&q=80",
        rating: {
            rate: 4.8,
            count: 156,
        },
    },
    {
        id: 4,
        title: "Portable Phone Charger",
        price: 29.99,
        description:
            "10000mAh power bank with fast charging technology. Compatible with all devices and includes multiple charging ports.",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&q=80",
        rating: {
            rate: 4.2,
            count: 203,
        },
    },
    {
        id: 5,
        title: "Ergonomic Office Chair",
        price: 299.99,
        description:
            "Professional office chair with lumbar support, adjustable height, and breathable mesh back. Perfect for long work sessions.",
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
        rating: {
            rate: 4.6,
            count: 74,
        },
    },
    {
        id: 6,
        title: "Stainless Steel Water Bottle",
        price: 24.99,
        description:
            "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours. Leak-proof and eco-friendly.",
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
        rating: {
            rate: 4.7,
            count: 312,
        },
    },
    {
        id: 7,
        title: "Wireless Charging Pad",
        price: 39.99,
        description:
            "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator and overheating protection.",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1628191081658-7049b14bf1be?w=400&q=80",
        rating: {
            rate: 4.1,
            count: 95,
        },
    },
    {
        id: 8,
        title: "Premium Coffee Beans",
        price: 18.99,
        description:
            "Single-origin arabica coffee beans, medium roast. Ethically sourced with notes of chocolate and caramel. Perfect for espresso or drip coffee.",
        category: "Food & Beverage",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80",
        rating: {
            rate: 4.9,
            count: 187,
        },
    },
];
const ProductDetails = () => {
    const router = useNavigate();
    return (
        <>
            <div className='container grid grid-cols-2 gap-10 my-10'>
                <div className=''>
                    <img
                        src={product.image}
                        alt='Product image'
                        className='w-full object-cover h-full rounded-2xl'
                    />
                </div>
                <div className=''>
                    <span className='bg-gray-200 text-black text-xs font-medium px-2.5 py-1 rounded-full'>
                        {product.category}
                    </span>
                    <h2 className='text-3xl my-5 font-medium hover:text-blue-500 transition-all duration-300'>
                        {product.title}
                    </h2>
                    <div className='flex my-3 gap-1'>
                        <Rating
                            style={{ maxWidth: 100 }}
                            readOnly
                            orientation='horizontal'
                            value={product.rating.rate}
                        />
                        <p>{product.rating.rate}</p>
                        <p>({product.rating.count} reviews)</p>
                    </div>
                    <div className=''>
                        {product.specifications.map((specification) => (
                            <div className='flex items-center gap-3 my-1'>
                                <h3 className='text-lg font-medium'>
                                    {specification.name}:
                                </h3>
                                <p>{specification.specification}</p>
                            </div>
                        ))}
                    </div>
                    <h3 className='text-2xl font-black my-3'>
                        ${product.price}
                    </h3>
                    <h3 className='font-medium text-lg'>Description:</h3>
                    <p className='mb-5'>{product.description}</p>
                    <div className='grid grid-cols-2 gap-3'>
                        <button
                            className='flex items-center justify-center gap-5 border rounded-md border-gray-300 bg-white cursor-pointer'
                            onClick={() => router("/")}>
                            <FaArrowLeftLong /> Back to shopping
                        </button>
                        <AddToCartButton />
                    </div>
                </div>
            </div>
            <div className='container'>
                <h2 className="text-3xl font-semibold">Related Products</h2>
                <div className='grid grid-cols-4 gap-5 mt-5'>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
