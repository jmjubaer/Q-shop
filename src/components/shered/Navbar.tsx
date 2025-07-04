import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='container py-3 flex items-center justify-between'>
            <Link to='/' className='flex items-center space-x-2'>
                <div className='w-9 h-9 gradient_bg rounded-lg flex items-center justify-center'>
                    <span className='text-white font-bold text-lg'>Q</span>
                </div>
                <span className='text-xl font-bold text-gray-900'>Q Shop</span>
            </Link>
            <nav>
                <ul className='flex items-center gap-5'>
                    <li>
                        <NavLink
                            to={"/"}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-500 border-b-2"
                                    : "text-gray-500"
                            }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <button className='p-3 hover:bg-gray-100 rounded-md text-xl cursor-pointer'>
                            <FaShoppingCart />
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
