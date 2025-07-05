import { LiaFilterSolid } from "react-icons/lia";
import ProductCard from "../../shered/ui/ProductCard";

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
const Product = () => {
    return (
        <div className='my-10 container'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2 font-medium'>
                    <LiaFilterSolid className=' text-xl' /> <p>Filter & Sort</p>
                </div>
                <div className='flex items-center gap-5'>
                    <select
                        name=''
                        id=''
                        className='outline-0 p-2 pl-4 pr-6 bg-white border border-gray-200 rounded-md shadow'>
                        <option value=''>All categories</option>
                        <option value='Electronics'>Electronics</option>
                        <option value='Electronics'>Electronics</option>
                        <option value='Accessories'>Accessories</option>
                    </select>
                    <select
                        name=''
                        id=''
                        className='outline-0 p-2 pl-4 pr-6 bg-white border border-gray-200 rounded-md shadow'>
                        <option value=''>All categories</option>
                        <option value='Electronics'>Electronics</option>
                        <option value='Electronics'>Electronics</option>
                        <option value='Accessories'>Accessories</option>
                    </select>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-5 mt-10'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Product;
