import React, { useState } from 'react'
import Footer from "../../Components/Footer"
import { FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useCart } from "./Context/Cart Context"

const Cart = () => {
    const { cart, removeFromCart, updateCartQuantity } = useCart()
    const [showModal, setShowModal] = useState(false)
    const [itemToRemove, setItemToRemove] = useState(null)

    const handleQuantityChange = (item, change) => 
    {
        const newQuantity = item.quantity + change
        if (newQuantity > 0) 
        {
            updateCartQuantity(item.product, newQuantity)
        }
    }

    const handleRemoveClick = item => 
    {
        setItemToRemove(item)
        setShowModal(true)
    }

    const confirmRemoveItem = () => 
    {
        removeFromCart(itemToRemove.product.id)
        setShowModal(false)
    }

    const totalPrice = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0).toLocaleString()

    return (
        <>
            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <FaTrashAlt className="h-6 w-6 text-red-600" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Remove Item</h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Are you sure you want to remove this item from your cart? This action cannot be undone.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={confirmRemoveItem}>Remove</button>
                                <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setShowModal(false)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex items-center justify-center md:mx-8 p-4 mb-4 md:text-lg">
                <span className="text-black font-semibold">Shopping Cart</span>
                <span className="mx-2">›</span>
                <span className="text-gray-500">Secure Checkout</span>
                <span className="mx-2">›</span>
                <span className="text-gray-500">Order Complete</span>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:mx-2 gap-4 p-4">
                <div className="w-full md:w-2/3 mb-4 md:mb-0">
                    <h2 className="font-bold px-4 text-xl uppercase text-center md:text-left mb-4">Shopping cart details</h2>
                    {cart.length === 0 ? (
                        <p className="text-center">Your cart is empty.</p>
                    ) : (
                        cart.map(item => (
                            <div key={item.product.id} className="relative flex items-center bg-gray-100 p-4 rounded-lg shadow-md mt-3">
                                <img src={item.product.image} alt={item.product.name} className="h-24 w-24 object-cover rounded-lg"/>
                                <div className="flex flex-col ml-4 flex-grow">
                                    <h3 className="font-bold text-lg mb-2">{item.product.name}</h3>
                                    <div className="flex items-center mt-auto mb-10">
                                        <button onClick={() => handleQuantityChange(item, -1)} className="bg-gray-300 text-gray-700 p-2 rounded-l focus:outline-none hover:bg-gray-400" disabled={item.quantity === 1} >-</button>
                                        <input type="number" value={item.quantity} readOnly className="w-16 md:w-40 h-10 bg-white text-center border-t border-b border-gray-300 focus:outline-none"/>
                                        <button onClick={() => handleQuantityChange(item, 1)} className="bg-gray-300 text-gray-700 p-2 rounded-r focus:outline-none hover:bg-gray-400">+</button>
                                    </div>
                                </div>
                                <p className="absolute bottom-4 right-4 text-lg font-semibold">KES {item.product.price.toLocaleString()}</p>
                                <FaTrashAlt onClick={() => handleRemoveClick(item)} className="ml-4 absolute top-2 right-2 text-xl cursor-pointer hover:text-red-500" />
                            </div>
                        ))
                    )}
                </div>
                <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded-lg shadow-md">
                    <h2 className="font-bold text-xl uppercase text-center md:text-left">Order summary</h2>
                    <hr className="mb-4"/>
                    <div className="flex justify-between">
                        <p className="text-lg mb-2">Subtotal</p>
                        <span className="font-semibold">KES {totalPrice}</span>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-lg mb-2">Tax</p>
                        <span className="font-semibold">KES 0</span>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-lg mb-4">Total</p>
                        <span className="font-semibold">KES {totalPrice}</span>
                    </div>
                    <Link to="/checkout" className={`btn w-full bg-background text-white py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300 mb-4 ${cart.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={cart.length === 0}>Checkout</Link>
                    <Link to="/shop" className="text-blue-500 mx-auto hover:underline">
                    {
                        cart.length > 0 ? "Continue shopping" : "Start shopping"
                    }
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart
