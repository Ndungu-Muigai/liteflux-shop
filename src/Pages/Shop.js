import Footer from "../Components/Footer";

import { CiDeliveryTruck } from "react-icons/ci";
import { BsCashCoin } from "react-icons/bs";
import { AiOutlineFileProtect } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

const Shop = () => 
{
    return (
        <>
            <div className="w-full border border-gray-300 p-2">
                <h1 className="uppercase text-center font-bold">The intro image gallery goes here</h1>
            </div>
            <div className="grid grid-cols-1 gap-3 mt-3 md:gap-0 md:flex md:justify-around md:items-center bg-gray-100 py-4 rounded-lg shadow-md">
                <div className="flex md:flex-col items-center px-2 md:px-0">
                    <CiDeliveryTruck className="text-3xl mb-2"/>
                    <span className="text-sm font-medium px-4">Fast Free Shipping over KES1500</span>
                </div>
                <div className="flex md:flex-col items-center px-2 md:px-0">
                    <BsCashCoin className="text-3xl mb-2"/>
                    <span className="text-sm font-medium px-4">Cash On Delivery</span>
                </div>
                <div className="flex md:flex-col items-center px-2 md:px-0">
                    <AiOutlineFileProtect className="text-3xl mb-2"/>
                    <span className="text-sm font-medium px-4">Hassle-Free Warranty</span>
                </div>
            </div>
            <div className="mt-3 px-2 lg:px-12">
                <Link to={"/categories/sockets"}>
                    <div className="category" style={{ backgroundImage: "url('https://lightingequipmentsales.com/wp-content/uploads/2017/11/LED-Bulb-Types-740x416.jpg')" }}>
                        <span className="category-span">Sockets</span>
                    </div>
                </Link>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link to={"/categories/cctv-cameras"}>
                        <div className="category" style={{ backgroundImage: "url('https://lightingequipmentsales.com/wp-content/uploads/2017/11/LED-Bulb-Types-740x416.jpg')" }}>
                            <span className="category-span">CCTV Cameras</span>
                        </div>
                    </Link>
                    <Link to={"/categories/solar-panels"}>
                        <div className="category " style={{ backgroundImage: "url('https://lightingequipmentsales.com/wp-content/uploads/2017/11/LED-Bulb-Types-740x416.jpg')" }}>
                            <span className="category-span">Solar Panels</span>
                        </div>
                    </Link>
                    <Link to={"/categories/street-lights"}>
                        <div className="category" style={{ backgroundImage: "url('https://lightingequipmentsales.com/wp-content/uploads/2017/11/LED-Bulb-Types-740x416.jpg')" }}>
                            <span className="category-span">Street Lights</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="mt-3 px-2 lg:px-12">
                <h1 className="uppercase text-center font-bold text-xl  mb-4">Product display</h1>
                <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} spaceBetween={15} slidesPerView={1} pagination={{ clickable: true }} autoplay={{ delay: 2500,disableOnInteraction: false }} breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 20,}, 768: { slidesPerView: 3,  spaceBetween: 15,}, 1024: {slidesPerView: 3, spaceBetween: 15,}}}>
                    <SwiperSlide className="pb-10">
                        <Link to={`/products/test`} className="card border border-gray-300">
                            <firgure className="p-1">
                                <img src="https://lightingequipmentsales.com/wp-content/uploads/2017/11/LED-Bulb-Types-740x416.jpg" alt="Product Name" />
                            </firgure>
                            <div className="card-body">
                                <h2 className="card-title">Product title</h2>
                                <p className="card-text">This is a longer card with supporting text below as a natural</p>
                                <p className="font-bold uppercase text-lg">KES {1500}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/products/test`} className="card border border-gray-300">
                            <firgure className="p-1">
                                <img src="https://lightingequipmentsales.com/wp-content/uploads/2017/11/LED-Bulb-Types-740x416.jpg" alt="Product Name" />
                            </firgure>
                            <div className="card-body">
                                <h2 className="card-title">Product title</h2>
                                <p className="card-text">This is a longer card with supporting text below as a natural</p>
                                <p className="font-bold uppercase text-lg">KES {1500}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/products/test`} className="card border border-gray-300">
                            <firgure className="p-1">
                                <img src="https://lightingequipmentsales.com/wp-content/uploads/2017/11/LED-Bulb-Types-740x416.jpg" alt="Product Name" />
                            </firgure>
                            <div className="card-body">
                                <h2 className="card-title">Product title</h2>
                                <p className="card-text">This is a longer card with supporting text below as a natural</p>
                                <p className="font-bold uppercase text-lg">KES {1500}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/products/test`} className="card border border-gray-300">
                            <firgure className="p-1">
                                <img src="https://lightingequipmentsales.com/wp-content/uploads/2017/11/LED-Bulb-Types-740x416.jpg" alt="Product Name" />
                            </firgure>
                            <div className="card-body">
                                <h2 className="card-title">Product title</h2>
                                <p className="card-text">This is a longer card with supporting text below as a natural</p>
                                <p className="font-bold uppercase text-lg">KES {1500}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
                
            </div>
            <Footer/>
        </>
    );
}

export default Shop;
