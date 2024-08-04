/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer'
import { useCart } from './Context/Cart Context'

const ProductCard = () => 
{
    const [products, setProducts] = useState([])
    const [productData, setProductData] = useState({ product: null, quantity: 1 })
    const { name } = useParams()
    const navigate = useNavigate()
    const { addToCart } = useCart()

    useEffect(() => 
    {
        fetch('https://products.litefluxent.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])

    useEffect(() => 
    {
        if (products.length > 0) 
        {
            const individualProduct = products.find(p => p.name.toLowerCase() === name.toLowerCase())
            setProductData(prevState => ({ ...prevState, product: individualProduct || null }))
        }
    }, [products, name])

    const handleQuantityChange = change => setProductData(prevState => ({...prevState,quantity: Math.max(1, prevState.quantity + change)}))

    const handleAddToCart = () => 
    {
        if (productData.product) 
        {
            addToCart(productData.product, productData.quantity) 
        }
    }

    if (!productData.product) 
    {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex flex-col md:flex-row items-center border border-gray-300 p-4 animate-pulse max-w-4xl w-full h-96">
                    <figure className="p-1 bg-gray-200 h-64 w-full md:w-1/2"></figure>
                    <div className="card-body p-4 w-full md:w-1/2">
                        <h2 className="bg-gray-200 h-6 w-1/2 mb-4"></h2>
                        <p className="bg-gray-200 h-4 w-full mb-2"></p>
                        <p className="bg-gray-200 h-4 w-3/4 mb-2"></p>
                        <p className="bg-gray-200 h-4 w-2/4 mb-4"></p>
                        <div className="flex space-x-4">
                            <button className="px-4 py-2 bg-gray-200 h-10 w-24"></button>
                            <button className="px-4 py-2 bg-gray-200 h-10 w-24"></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="flex justify-center items-center mt-6">
                <div className="flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden shadow-lg max-w-4xl w-full h-auto">
                    <figure className="p-1 w-full md:w-1/2">
                        <img src={productData.product.image} alt={productData.product.name} className="w-full h-64 object-cover" />
                    </figure>
                    <div className="p-6 w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-2">{productData.product.name}</h2>
                        <p className="text-gray-700 mb-4">{productData.product.description}</p>
                        <p className="text-lg font-semibold text-gray-900 mb-4">KES {(productData.product.price).toLocaleString()}</p>
                        <div className="flex justify-center md:justify-start items-center mt-4 mb-6">
                            <button onClick={() => handleQuantityChange(-1)} className="bg-gray-300 text-gray-700 p-2 rounded-l focus:outline-none hover:bg-gray-400" disabled={productData.quantity === 1}>-</button>
                            <input type="number" value={productData.quantity} readOnly className="w-52 md:w-40 h-10 bg-white text-center border-t border-b border-gray-300 focus:outline-none"/>
                            <button onClick={() => handleQuantityChange(1)} className="bg-gray-300 text-gray-700 p-2 rounded-r focus:outline-none hover:bg-gray-400">+    </button>
                        </div>
                        <button onClick={handleAddToCart} className="block w-full bg-background text-white py-2 rounded mb-2 hover:bg-blue-600 transition duration-300">Add to Cart</button>
                        <button onClick={() => navigate(-1)} className="block w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition duration-300">Back</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductCard
