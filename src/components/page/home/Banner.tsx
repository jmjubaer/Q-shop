import { FaSearch } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='gradient_bg py-20'>
            <div className='container text-white text-center'>
                <h1 className='md:text-7xl sm:text-5xl text-3xl font-semibold '>Welcome to Q-Shop</h1>
                <h2 className='md:text-2xl sm:text-xl text-sm mt-3'>
                    Discover premium products at unbeatable prices
                </h2>
                <div className='md:w-2/5 sm:w-4/5 max-w-[400px] mx-auto relative p-2.5 px-5 pl-10 mt-5 rounded-md bg-white'>
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
