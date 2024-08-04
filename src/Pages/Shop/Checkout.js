/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "../../Components/Footer"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { KenyaAdministrativeDivisions } from 'kenya-administrative-divisions'
import { useCart } from "./Context/Cart Context"

const Checkout = () => 
{
    // Initializing the Kenya Admin
    const kenyaAdmin = new KenyaAdministrativeDivisions()

    // useState hook for the form data
    const [checkoutDetails, setCheckoutDetails] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        code: "+254",
        county: "",
        sub_county: "",
        ward: "",
        street: "",
    })

    // useState hooks for the counties, constituencies, and wards
    const [counties, setCounties] = useState([])
    const [constituencies, setConstituencies] = useState([])
    const [wards, setWards] = useState([])

    const { cart } = useCart() // Destructure cart from useCart

    // Function to handle input change
    const handleInputChange = e => setCheckoutDetails({ ...checkoutDetails, [e.target.name]: e.target.value })

    // Getting everything from the Kenya Administrative Divisions
    const data = kenyaAdmin.getAll()

    // useEffect hook to set the fetched data
    useEffect(() => setCounties(data), [data])

    // useEffect hook to update the constituencies based on the county
    useEffect(() => 
    {
        const matchingConstituencies = counties.find(d => d.county_name === checkoutDetails.county)
        setConstituencies(matchingConstituencies ? matchingConstituencies.constituencies : [])
        setWards([]) // Clear wards when county changes
        setCheckoutDetails(prev => ({ ...prev, sub_county: "", ward: "" })) // Reset sub_county and ward
    }, [checkoutDetails.county, counties])

    // useEffect hook to update the wards based on the sub county
    useEffect(() => 
    {
        const matchingWards = constituencies.find(s => s.constituency_name === checkoutDetails.sub_county)
        setWards(matchingWards ? matchingWards.wards : [])
        setCheckoutDetails(prev => ({ ...prev, ward: "" })) // Reset ward when sub_county changes
    }, [checkoutDetails.sub_county, constituencies])

    // Calculate the subtotal
    const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)

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
                    <h2 className="font-bold text-xl uppercase text-center md:text-left mb-4">Shipping address</h2>
                    <hr className="mb-4" />
                    <div className="relative flex items-center">
                        <form className="w-full">
                            <div className="mb-4">
                                <label className="block text-gray-700">Email Address <span className="span">*</span></label>
                                <input type="email" name="email" className="input-field" placeholder="yourname@domain.com" value={checkoutDetails.email} onChange={handleInputChange} required />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-gray-700">First Name <span className="span">*</span></label>
                                    <input type="text" name="first_name" className="input-field" placeholder="First Name" value={checkoutDetails.first_name} onChange={handleInputChange} required />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Last Name <span className="span">*</span></label>
                                    <input type="text" name="last_name" className="input-field" placeholder="Last Name" value={checkoutDetails.last_name} onChange={handleInputChange} required />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">County <span className="span">*</span></label>
                                <select className="input-field" name="county" value={checkoutDetails.county} onChange={handleInputChange} required>
                                    <option value="">Select County</option>
                                    {
                                        counties.map(county => <option key={county.county_code} value={county.county_name}>{county.county_name}</option>)
                                    }
                                </select>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-gray-700">Constituency <span className="span">*</span></label>
                                    <select className="input-field" name="sub_county" value={checkoutDetails.sub_county} onChange={handleInputChange} disabled={!checkoutDetails.county} required>
                                        <option value="">Select Constituency</option>
                                        {
                                            constituencies.map(s => <option key={s.constituency_name} value={s.constituency_name}>{s.constituency_name}</option>)
                                        }
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-700">Ward <span className="span">*</span></label>
                                    <select className="input-field" name="ward" value={checkoutDetails.ward} onChange={handleInputChange} disabled={!checkoutDetails.sub_county} required>
                                        <option value="">Select Ward</option>
                                        {
                                            wards.map(ward => <option key={ward} value={ward}>{ward}</option>)
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Street Address <span className="span">*</span></label>
                                <input type="text" name="street" className="input-field" value={checkoutDetails.street} onChange={handleInputChange} required />
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 mb-4">
                                <div className="w-1/4">
                                    <label className="block text-gray-700">Number Code</label>
                                    <input type="text" name="code" className="input-field" value={checkoutDetails.code} disabled required />
                                </div>
                                <div className="w-full">
                                    <label className="block text-gray-700">Phone Number <span className="span">*</span></label>
                                    <input type="text" name="phone" className="input-field" placeholder="7xxxxxxxx" required />
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
                    <hr className="mb-4" />
                    {cart.map(item => (
                        <div key={item.product.id} className="relative flex items-start p-2 mb-4">
                            <img src={item.product.image} alt={item.product.name} className="h-24 w-24 object-cover rounded-lg" />
                            <div className="flex flex-col ml-4 flex-grow">
                                <h3 className="font-bold text-lg mb-2">{item.product.name}</h3>
                                <p>Qty: {item.quantity}</p>
                                <p className="text-base mt-2">KES {item.product.price.toLocaleString()}</p>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-between">
                        <p className="text-base mb-2">Subtotal</p>
                        <span className="font-semibold">KES {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-base mb-2">Shipping</p>
                        <span className="font-semibold">KES 0</span>
                    </div>
                    <hr className="m-3" />
                    <div className="flex justify-between">
                        <p className="text-xl mb-4 font-bold">Total</p>
                        <span className="text-xl font-bold">KES {subtotal.toLocaleString()}</span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Checkout
