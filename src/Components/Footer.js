import { FaWhatsapp, FaFacebook } from "react-icons/fa"
import { MdOutlinePhoneCallback } from "react-icons/md"
import { CiMail } from "react-icons/ci"
import { FaLocationDot } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Footer = () => 
{
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className="py-6 mt-2">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold uppercase mb-4">Liteflux Enterprises <sup>&trade;</sup></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="footer-h3">Services</h3>
                        <ul className="space-y-2">
                            <li>Structured Cabling</li>
                            <li>Security Systems installation</li>
                            <li>Solar installation and maintenance</li>
                            <li>Fiber cabling</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="footer-h3">Find us on social media</h3>
                        <div className="flex flex-col space-y-2">
                            <Link to="whatsapp://send?text=Hello. I'd like to inquire about your products&phone=+254700375948" target="_blank" rel="noopener noreferrer" className="footer-link">
                                <FaWhatsapp className="text-green-500 footer-icon" />
                                <p>WhatsApp</p>
                            </Link>
                            <Link to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="footer-link">
                                <FaFacebook className="text-blue-500 footer-icon" />
                                <p>Facebook</p>
                            </Link>
                            <Link to="tel:+254700375948" target="_blank" rel="noopener noreferrer" className="footer-link">
                                <MdOutlinePhoneCallback className="footer-icon"/>
                                <p>+254 700 375-948</p>
                            </Link>
                            <Link to="mailto:liteflux23@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link ">
                                <CiMail className="footer-icon"/>
                                <p>Email: liteflux23@gmail.com</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="footer-h3">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="hover:border-b-2 hover:border-blue-500">Home</Link>
                            </li>
                            <li>
                                <Link to="/shop" className="hover:border-b-2 hover:border-blue-500">Shop</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:border-b-2 hover:border-blue-500">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="footer-h3">Address</h3>
                        <div className="flex items-center space-x-2">
                            <FaLocationDot className="footer-icon"/>
                            <p>R.Towers Building Ambala road Nyamakima</p>
                        </div>
                        <h3 className="text-xl font-semibold mt-4 mb-2">Vision</h3>
                        <p>
                            To become a leader in providing the best Electrical & ICT
                            installations, innovative products, and services in various 
                            industries.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-5 border-t-2 border-gray-300 w-full">
                <p className="mt-4 font-semibold uppercase">&copy; {year} Liteflux Enterprises</p>
            </div>
        </footer>
    );
}

export default Footer
