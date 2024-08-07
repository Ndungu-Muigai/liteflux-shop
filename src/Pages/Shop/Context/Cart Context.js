import React, { createContext, useState, useEffect, useContext } from 'react'
import { toast } from 'react-toastify'

const CartContext = createContext()

const saveCartToLocalStorage = cart => localStorage.setItem('cart', JSON.stringify(cart))

const loadCartFromLocalStorage = () => 
{
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
}

export const CartProvider = ({ children }) => 
{
    const [cart, setCart] = useState(loadCartFromLocalStorage)

    useEffect(() => saveCartToLocalStorage(cart), [cart])

    const addToCart = (product, quantity) => 
    {
        setCart(prevCart => 
        {
            const existingProductIndex = prevCart.findIndex(item => item.product.id === product.id)
            if (existingProductIndex !== -1) 
            {
                const newCart = [...prevCart]
                newCart[existingProductIndex].quantity += quantity
                toast.success("Product quantity updated" )
                return newCart
            } 
            else 
            {
                toast.success("Product added to cart")
                return [...prevCart, { product, quantity }]
            }
        })
    }

    const updateCartQuantity= (product, quantity) =>
    {
        setCart(prevCart =>
        {
            const existingProductIndex=prevCart.findIndex(item => item.product.id === product.id)
            if(existingProductIndex !== -1)
            {
                const newCart=[...prevCart]
                newCart[existingProductIndex].quantity = quantity
                toast.success(`Product added to cart`)
                return newCart
            }
        }
        )
    }

    const removeFromCart = productId => 
    {
        setCart(prevCart => 
        {
            const updatedCart = prevCart.filter(item => item.product.id !== productId)
            if (updatedCart.length < prevCart.length) 
            {
                toast.success(`Item removed from cart`)
            }
            return updatedCart
        })
    }

    const clearCart = () => 
    {
        setCart([])
        localStorage.removeItem('cart')
        toast.success('Cart cleared')
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateCartQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)
