import { FaSearch } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='gradient_bg py-20'>
            <div className='container text-white text-center'>
                <h1 className='text-7xl font-semibold'>Welcome to Q-Shop</h1>
                <h2 className='text-2xl mt-3'>
                    Discover premium products at unbeatable prices
                </h2>
                <div className='w-2/5 mx-auto relative p-2.5 px-5 pl-10 mt-5 rounded-md bg-white'>
                    <FaSearch className='absolute top-3 text-lg left-2.5 text-black/50' />
                    <input
                        type='search'
                        className='w-full text-black outline-0'
                        placeholder='Search Products ....'
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
