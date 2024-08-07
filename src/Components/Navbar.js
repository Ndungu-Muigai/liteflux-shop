import React, { useState } from 'react'
import Logo from '../Assets/Images/logo.png'
import { Link } from 'react-router-dom'
import { MdOutlineShoppingBag } from "react-icons/md"
import { CiHeart } from "react-icons/ci"
import { useCart } from '../Pages/Shop/Context/Cart Context'
import {useSavedItems} from "../Pages/Shop/Context/Saved Items Context"

const Navbar = () => 
{
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const { cart = [] } = useCart() 
    const {savedItems = []}=useSavedItems()

    const getTotalPrice = () => 
    {
        return cart.reduce((total, item) => 
        {
            const price = item.product.price || 0
            const quantity = item.quantity || 0
            return total + (price * quantity)
        }, 0)
    }

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)
    const closeDropdown = () => setIsDropdownOpen(false)

    const handleLinkClick = () => 
    {
        if (window.innerWidth < 768) 
        {
            closeDropdown()
        }
    }

    return (
        <div className="navbar fixed top-0 left-0 right-0 w-full bg-background text-white z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0}  role="button" className="btn btn-ghost md:hidden" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className={`menu menu-sm dropdown-content bg-background rounded-box z-[1] mt-3 w-52 p-2 shadow ${isDropdownOpen ? 'block' : 'hidden'}`}>
                        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                        <li><Link to="/shop" onClick={handleLinkClick}>Shop</Link></li>
                        <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
                    </ul>
                </div>
                <img src={Logo} alt='Liteflux Enterprises' className='w-32 h-20 p-2'/>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end flex">
                <ul className='menu menu-horizontal px-2 text-2xl'>
                    <li>
                        <Link to="/saved" className='flex items-center'>
                            <div tabIndex={0} role='button' className="flex items-center">
                                <div className="indicator">
                                    <CiHeart className="text-2xl"/>
                                    <span className="badge badge-sm indicator-item text-inherit bg-transparent border-none">{savedItems.length}</span>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li onClick={toggleDropdown}>
                        <div className="relative ml-4">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role='button' className="flex items-center">
                                    <div className="indicator">
                                        <MdOutlineShoppingBag className="text-2xl"/>
                                        <span className="badge badge-sm indicator-item text-inherit bg-transparent border-none">{cart.length}</span>
                                    </div>
                                </div>
                                <div className={`card card-compact dropdown-content bg-background z-[1] mt-9 w-64 shadow-lg ${isDropdownOpen ? 'block' : 'hidden'}`} onClick={closeDropdown}>
                                    <div className="card-body max-h-72 overflow-y-auto">
                                        {
                                            cart.length > 0 
                                            ? 
                                                (
                                                    cart.map(item => 
                                                    (
                                                        <div key={item.product.id} className='flex justify-between mb-2 gap-2'>
                                                            <img src={item.product.image} alt={item.product.name} className='w-20'/>
                                                            <div>
                                                                <p className='pt-1'>{item.product.name}</p>
                                                                <p className='pt-1'>Qty: {item.quantity || 0}</p>
                                                                <p className='pt-1'>Price: Kshs {item.product.price ? item.product.price.toLocaleString() : '0.00'}</p>
                                                            </div>
                                                        </div>
                                                    ))
                                                ) 
                                            : 
                                                (
                                                    <p className='text-center text-white'>No items in cart</p>
                                                )
                                            }
                                        <div className="flex justify-between text-lg mt-2">
                                            <p className='text-white'>Total</p>
                                            <span className="text-white">Kshs {getTotalPrice().toLocaleString()}</span>
                                        </div>
                                        <div className="card-actions mt-2">
                                            <Link to="/cart" className="btn btn-primary btn-block">View Cart</Link>
                                            <Link to="/checkout" className={`btn btn-primary btn-block ${cart.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={(e) => cart.length === 0 && e.preventDefault()}>Checkout</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
