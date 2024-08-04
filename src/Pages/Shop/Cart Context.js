import React, { createContext, useState, useEffect, useContext } from 'react'
import { toast } from 'react-toastify'

// Create the Cart Context
const CartContext = createContext()

// Helper function to save cart to local storage
const saveCartToLocalStorage = cart => localStorage.setItem('cart', JSON.stringify(cart))

// Helper function to load cart from local storage
const loadCartFromLocalStorage = () => 
{
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
}

export const CartProvider = ({ children }) => 
{
    const [cart, setCart] = useState(loadCartFromLocalStorage)

    useEffect(() => 
    {
        saveCartToLocalStorage(cart)
    }, [cart])

    // Add or update item in cart
    const addToCart = (product, quantity) => 
    {
        setCart(prevCart => 
        {
            const existingProductIndex = prevCart.findIndex(item => item.product.id === product.id)
            if (existingProductIndex !== -1) 
            {
                // Update quantity if the product is already in the cart
                const newCart = [...prevCart]
                newCart[existingProductIndex].quantity = quantity // Set the quantity directly
                toast.success(`Product quantity updated`)
                return newCart
            } 
            else 
            {
                // Add new product to the cart
                toast.success(`Product added to cart`)
                return [...prevCart, { product, quantity }]
            }
        })
    }

    // Remove item from cart
    const removeFromCart = productId => 
    {
        setCart(prevCart => 
        {
            const updatedCart = prevCart.filter(item => item.product.id !== productId)
            const removedItem = prevCart.find(item => item.product.id === productId)
            if (removedItem) 
            {
                toast.warn(`Item removed from cart`)
            }
            return updatedCart
        })
    }

    // Clear the cart
    const clearCart = () => 
    {
        setCart([])
        toast.error('Cart cleared')
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext)
