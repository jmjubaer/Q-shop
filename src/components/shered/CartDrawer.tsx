import { useCart } from "../../hooks/useCart";
import { FaMinus, FaPlus } from "react-icons/fa";
import {
    clearCart,
    decrementCartItem,
    incrementCartItem,
    removeFromCart,
} from "../../utils/addToCart";
import { IoMdClose } from "react-icons/io";
import { Modal } from "antd";
import { useState } from "react";
import Swal from "sweetalert2";

const CartDrawer = ({ onClose }: { onClose: () => void }) => {
    const { cartItems, handleReFetch } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // open modal function
    const showModal = () => {
        setIsModalOpen(true);
    };

    // close modal function
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // Increase cart quantity
    const handleIncreaseQuantity = (_id: string) => {
        incrementCartItem(_id);
        handleReFetch();
    };

    // Decrease cart quantity
    const handleDecreaseQuantity = (_id: string) => {
        decrementCartItem(_id);
        handleReFetch();
    };

    // Item remove from cart
    const handleRemoveFromCart = (_id: string) => {
        removeFromCart(_id);
        handleReFetch();
    };

    // Handle confirm order
    const handleOrder = (event: React.FormEvent<HTMLFormElement>) => {
        // Prevent default behavior
        event.preventDefault();

        // get the form state
        const form = event.currentTarget;
        const name = (form.elements.namedItem("name") as HTMLInputElement)
            .value;
        const email = (form.elements.namedItem("email") as HTMLInputElement)
            .value;
        const address = (form.elements.namedItem("address") as HTMLInputElement)
            .value;
        console.log(name, email, address);

        // close modal function
        handleCancel();
        // Reset the form
        form.reset();

        // close side drawer
        onClose();

        // remove all item from cart
        {
            clearCart();
            handleReFetch();
        }
        // alert for confirm
        Swal.fire({
            icon: "success",
            title: "Success",
            text: "Your order placed successfully",
            showConfirmButton: false,
            timer: 1500,
        });
    };
    return (
        <div className='flex justify-between flex-col h-full'>
            <div className='pb-5'>
                {cartItems.map((item) => (
                    <div className='flex mb-5 gap-3 bg-gray-100 p-2 relative rounded-md'>
                        <div className=''>
                            <img
                                src={item.image}
                                alt={item.title}
                                className='w-16 h-16 object-center rounded-md border'
                            />
                        </div>
                        <div className=''>
                            <h3 className=' font-medium pr-5'>{item.title}</h3>
                            <p className='text-lg font-black'>${item.price}</p>
                            <div className='flex items-center gap-2 mt-1'>
                                <button
                                    onClick={() =>
                                        handleDecreaseQuantity(item._id)
                                    }
                                    type='button'
                                    className='bg-black/10 cursor-pointer p-2 rounded'>
                                    <FaMinus className='' />
                                </button>
                                <p className='w-fit block px-4 py-1 text-base bg-black/10 outline-0 rounded-md'>
                                    {item.quantity}
                                </p>
                                <button
                                    onClick={() =>
                                        handleIncreaseQuantity(item._id)
                                    }
                                    type='button'
                                    className='bg-black/10 cursor-pointer p-2 rounded'>
                                    <FaPlus className='' />
                                </button>
                            </div>
                        </div>
                        <button
                            onClick={() => handleRemoveFromCart(item._id)}
                            className='text-red-500 text-2xl absolute top-1 right-1 cursor-pointer'>
                            <IoMdClose />
                        </button>
                    </div>
                ))}
            </div>
            <div className=' p-3 sticky -bottom-6 left-0 w-full bg-white'>
                <div className='flex items-center justify-between'>
                    <h4 className='text-lg font-bold'>Total Price : </h4>
                    <p className='text-2xl font-black'>
                        $
                        {cartItems
                            .reduce((total, item) => {
                                return total + item.price * item.quantity;
                            }, 0)
                            .toFixed(2)}
                    </p>
                </div>
                <button
                    onClick={showModal}
                    className='gradient_bg w-full text-white rounded-md p-2 mt-5'>
                    Process to Checkout
                </button>
            </div>

            <Modal
                closable={{ "aria-label": "Custom Close Button" }}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}>
                <h3 className='text-xl mb-5'>Checkout order</h3>
                <form onSubmit={handleOrder} className='flex flex-col gap-3'>
                    <input
                        required
                        type='text'
                        placeholder='Enter Name ...'
                        name='name'
                        className='p-2 outline-0 rounded-md bg-gray-200 text-base'
                    />
                    <input
                        required
                        type='email'
                        placeholder='Enter Email ...'
                        name='email'
                        className='p-2 outline-0 rounded-md bg-gray-200 text-base'
                    />
                    <textarea
                        required
                        placeholder='Enter Address ...'
                        name='address'
                        className='p-2 outline-0 rounded-md bg-gray-200 text-base min-h-[100px]'></textarea>

                    <input
                        type='submit'
                        className='gradient_bg text-white p-2 rounded-md cursor-pointer'
                    />
                </form>
            </Modal>
        </div>
    );
};

export default CartDrawer;
