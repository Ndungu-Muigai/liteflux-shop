import React, { useState } from 'react';
import Logo from '../Assets/Images/logo.png';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () =>setIsDropdownOpen(!isDropdownOpen)

    const closeDropdown = () => setIsDropdownOpen(false)

    return (
        <div className="navbar bg-background text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <img src={Logo} alt='Liteflux Enterprises' className='w-32 h-20 p-2'/>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end flex">
                <ul className='menu menu-horizontal px-4 text-2xl'>
                  <li>
                      <Link to="/saved" className='flex items-center'>
                        <div tabIndex={0} role='button' className="flex items-center">
                            <div className="indicator">
                                <CiHeart className="text-2xl"/>
                                <span className="badge badge-sm indicator-item text-inherit bg-transparent border-none">0</span>
                            </div>
                        </div>
                      </Link>
                  </li>
                    <li>
                      <div className="relative ml-4">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role='button' className="flex items-center" onClick={toggleDropdown}>
                                <div className="indicator">
                                    <MdOutlineShoppingBag className="text-2xl"/>
                                    <span className="badge badge-sm indicator-item text-inherit bg-transparent border-none">0</span>
                                </div>
                            </div>
                            <div className={`card card-compact dropdown-content bg-base-100 z-[1] mt-6 w-52 shadow-lg ${isDropdownOpen ? 'block' : 'hidden'}`} onClick={closeDropdown}>
                                <div className="card-body">
                                  <span className="text-lg font-bold">0 Items</span>
                                  <span className="text-info">Subtotal: Kshs. 0.00</span>
                                  <div className="card-actions mt-2">
                                    <Link to="/cart" className="btn btn-primary btn-block">View Cart</Link>
                                    <Link to="/checkout" className="btn btn-primary btn-block">Checkout</Link>
                                  </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
