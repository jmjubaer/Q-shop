import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { Drawer } from "antd";
import { useState } from "react";
import CartDrawer from "./CartDrawer";

const Navbar = () => {
    const { cartItems } = useCart();
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div className=' py-3  sticky top-0 bg-white z-20 shadow-md'>
                <div className='container flex items-center justify-between'>
                    <Link to='/' className='flex items-center space-x-2'>
                        <div className='w-9 h-9 gradient_bg rounded-lg flex items-center justify-center'>
                            <span className='text-white font-bold text-lg'>
                                Q
                            </span>
                        </div>
                        <span className='text-xl font-bold text-gray-900'>
                            Q Shop
                        </span>
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
                            <li className='w-fit h-fit relative'>
                                <button
                                    onClick={showDrawer}
                                    className='p-3 hover:bg-gray-100 rounded-md text-xl cursor-pointer'>
                                    <FaShoppingCart />
                                </button>
                                <p className='bg-red-500 w-5 h-5 absolute top-0 right-0 flex items-center justify-center rounded-full text-white text-sm'>
                                    <span className=''>
                                        {/* Todo: use reducer function */}
                                        {cartItems.reduce(
                                            (total, item) =>
                                                total + item.quantity,
                                            0
                                        )}
                                    </span>
                                </p>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Drawer
                className=''
                title='Basic Drawer'
                closable={{ "aria-label": "Close Button" }}
                onClose={onClose}
                open={open}>
                <CartDrawer onClose={onClose}/>
            </Drawer>
        </>
    );
};

export default Navbar;
