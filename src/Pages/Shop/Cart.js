import Footer from "../../Components/Footer";
import Logo from "../../Assets/Images/logo.png";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => 
{
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = change => setQuantity(prevQuantity => Math.max(1, prevQuantity + change))

    return (
        <>
            <div className="flex items-center justify-center md:mx-8 p-4 mb-4 md:text-lg">
                <span className="text-black font-semibold">Shopping Cart</span>
                <span className="mx-2">›</span>
                <span className="text-gray-500">Secure Checkout</span>
                <span className="mx-2">›</span>
                <span className="text-gray-500">Order Complete</span>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:mx-2 gap-4 p-4">
                <div className="w-full md:w-2/3 mb-4 md:mb-0">
                    <h2 className="font-bold text-xl uppercase mb-4">Shopping cart details</h2>
                    <div className="relative flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
                        <img src={Logo} alt="Product name" className="h-24 w-24 object-cover rounded-lg"/>
                        <div className="flex flex-col ml-4 flex-grow">
                            <h3 className="font-bold text-lg mb-2">Product name</h3>
                            <div className="flex items-center mt-auto mb-10">
                                <button onClick={() => handleQuantityChange(-1)} className="bg-gray-300 text-gray-700 p-2 rounded-l focus:outline-none hover:bg-gray-400" disabled={quantity === 1}>-</button>
                                <input type="number" value={quantity} readOnly className="w-16 md:w-40 h-10 bg-white text-center border-t border-b border-gray-300 focus:outline-none"/>
                                <button onClick={() => handleQuantityChange(1)} className="bg-gray-300 text-gray-700 p-2 rounded-r focus:outline-none hover:bg-gray-400">+</button>
                            </div>
                        </div>
                        <p className="absolute bottom-4 right-4 text-lg font-semibold">KES 1,500</p>
                        <FaTrashAlt className="ml-4 absolute top-2 right-2 text-xl cursor-pointer hover:text-red-700"/>
                    </div>
                </div>
                <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded-lg shadow-md">
                    <h2 className="font-bold text-xl uppercase mb-4">Order summary</h2>
                    <div className="flex justify-between">
                    	<p className="text-lg mb-2">Subtotal:</p>
                        <span className="font-semibold">KES 1,500</span>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-lg mb-2">Tax:</p>
                        <span className="font-semibold">KES 0</span>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-lg mb-4">Total:</p>
                        <span className="font-semibold">KES 1,500</span>
                    </div>
                    <button className="w-full bg-background text-white py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300 mb-4">Checkout</button>
                    <Link to="/shop" className="text-blue-500 mx-auto hover:underline">Continue shopping</Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Cart;
