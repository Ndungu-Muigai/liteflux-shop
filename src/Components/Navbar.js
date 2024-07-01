import React, { useState } from 'react';
import Logo from '../Assets/Images/logo.png';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

const Navbar = () => 
{
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () =>setIsDropdownOpen(!isDropdownOpen)

    const closeDropdown = () => setIsDropdownOpen(false)

    return (
        <div className="navbar fixed top-0 left-0 right-0 w-full bg-background text-white">
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
                <ul className='menu menu-horizontal px-2 text-2xl'>
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
                    <li onClick={toggleDropdown}>
                      <div className="relative ml-4">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role='button' className="flex items-center">
                                <div className="indicator">
                                    <MdOutlineShoppingBag className="text-2xl"/>
                                    <span className="badge badge-sm indicator-item text-inherit bg-transparent border-none">0</span>
                                </div>
                            </div>
                            <div className={`card card-compact dropdown-content bg-background z-[1] mt-9 w-64 shadow-lg ${isDropdownOpen ? 'block' : 'hidden'}`} onClick={closeDropdown}>
                                <div className="card-body max-h-72 overflow-y-auto">
                                  {/* <span className="text-lg font-bold">0 Items</span> */}
                                  <div className='flex justify-between'>
                                    <img src={Logo} alt='Product' className='w-20'/>
                                    <div>
                                        <p className='pt-1'>Product description</p>
                                        <p className='pt-1'>Qty: 1</p>
                                        <p className='pt-1'>Price: Kshs 1,500</p>
                                    </div>
                                  </div>
                                  <div className="flex justify-between text-lg mt-2">
                                    <p className='text-white'>Total</p>
                                    <span className="text-white">Kshs. 0.00</span>
                                  </div>
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
