import Footer from "../../Components/Footer";
import Logo from "../../Assets/Images/logo.png";

import { Link } from "react-router-dom";

const Checkout = () => 
{
    return (
        <>
            <div className="flex items-center justify-center md:mx-8 p-4 md:text-lg">
                <span className="text-gray-500">Shopping Cart</span>
                <span className="mx-2">›</span>
                <span className="text-black font-semibold">Secure Checkout</span>
                <span className="mx-2">›</span>
                <span className="text-gray-500">Order Complete</span>
            </div>

            <div className="flex flex-col md:flex-row justify-between md:mx-2 gap-4 p-4">
                <div className="w-full md:w-2/3 mb-4 px-4 md:mb-0 bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="font-bold text-xl px-4 uppercase text-center md:text-left mb-4">Shipping address</h2>
                    <hr className="mb-4" />
                    <div className="relative flex items-center">
                        <form className="w-full">
                            <div className="mb-4">
                                <label className="block text-gray-700">Email Address <span className="span">*</span></label>
                                <input type="email" name="email" className="input-field" placeholder="yourname@domain.com" required/>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-gray-700">First Name <span className="span">*</span></label>
                                    <input type="text" name="fname" className="input-field" placeholder="First Name" required/>
                                </div>
                                <div>
                                    <label className="block text-gray-700">Last Name <span className="span">*</span></label>
                                    <input type="text" name="lname" className="input-field" placeholder="Last Name" required/>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">County <span className="span">*</span></label>
                                <select className="input-field" name="county" required>
                                    <option disabled selected>Select County</option>
                                    <option>County A</option>
                                    <option>County B</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-gray-700">Sub County <span className="span">*</span></label>
                                    <select className="input-field" name="sub-county" required>
                                        <option disabled selected>Select Sub County</option>
                                        <option>Sub County A</option>
                                        <option>Sub County B</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-700">Ward <span className="span">*</span></label>
                                    <select className="input-field" name="ward" required>
                                        <option disabled selected>Select Ward</option>
                                        <option>Ward A</option>
                                        <option>Ward B</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Street Address <span className="span">*</span></label>
                                <input type="text" name="street" className="input-field" required/>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 mb-4">
                                <div className="w-1/4">
                                    <label className="block text-gray-700">Number Code</label>
                                    <input type="text" name="code" value="+254" className="input-field" disabled required/>
                                </div>
                                <div className="w-full">
                                    <label className="block text-gray-700">Phone Number <span className="span">*</span></label>
                                    <input type="text" name="phoneNumber" className="input-field" placeholder="7xxxxxxxx" required/>
                                </div>
                            </div>
                            <div className="flex justify-center mt-6">
                                <button type="submit" className="btn bg-background hover:bg-blue-700 text-white py-2 px-4 rounded w-full max-w-xs">Place Order</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="w-full md:w-1/3 bg-gray-100 p-2 rounded-lg shadow-md h-fit">
                    <div className="flex justify-between items-center px-2 mb-3">
                        <h2 className="font-bold text-xl uppercase text-center md:text-left">my order</h2>
                        <Link to="/cart" className="text-blue-600 hover:text-blue-800 font-semibold border border-blue-600 hover:border-blue-800 rounded px-3 py-1 transition-colors duration-200">Edit</Link>
                    </div>
                    <hr className="mb-4"/>
                    <div className="relative flex items-start p-2 mb-4">
                        <img src={Logo} alt="Product name" className="h-24 w-24 object-cover rounded-lg"/>
                        <div className="flex flex-col ml-4 flex-grow">
                            <h3 className="font-bold text-lg mb-2">Product name</h3>
                            <p>Qty: 1</p>
                            <p className="text-base mt-2">KES 1,500</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                    	<p className="text-base mb-2">Subtotal</p>
                        <span className="font-semibold">KES 1,500</span>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-base mb-2">Shipping</p>
                        <span className="font-semibold">KES 0</span>
                    </div>
                    <hr className="m-3"/>
                    <div className="flex justify-between">
                        <p className="text-xl mb-4 font-bold">Total</p>
                        <span className="text-xl font-bold">KES 1,500</span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Checkout;
