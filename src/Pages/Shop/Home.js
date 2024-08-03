import Footer from "../../Components/Footer"
import Slider from 'react-slick'

import CircuitBreaker from "../../Assets/Shop Category Images/Circuit breaker.jpeg"
import CCTV from "../../Assets/Shop Category Images/CCTV.jpeg"
import IPPhone from "../../Assets/Shop Category Images/IP Phone.jpeg"
import Lighting from "../../Assets/Shop Category Images/Lighting.jpeg"
import Sockets from "../../Assets/Shop Category Images/Sockets.jpeg"
import Solar from "../../Assets/Shop Category Images/Solar.jpg"

import SlidingImage1 from "../../Assets/Sliding images/1.jpeg"
import SlidingImage2 from "../../Assets/Sliding images/2.jpeg"

import { CiDeliveryTruck } from "react-icons/ci"
import { BsCashCoin } from "react-icons/bs"
import { AiOutlineFileProtect } from "react-icons/ai"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'

const Shop = () => 
{
    const settings = 
    {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    }
    
    const images = [
        SlidingImage1, 
        SlidingImage2,
        'https://cdn.pixabay.com/photo/2016/12/26/17/28/solar-panel-1932731_1280.jpg', 
        'https://cdn.pixabay.com/photo/2014/12/11/11/52/street-lights-564951_1280.jpg', 
    ]

    return (
        <>
            <div className="w-full p-1 overflow-hidden mb-5">
                <Slider {...settings}>
                    {
                        images.map((src, index) => 
                        (
                            <div key={index} className="flex justify-center items-center w-full">
                            {/* Option 1: Maintain aspect ratio with empty space */}
                            <img src={src} alt={`Slide ${index}`} className="w-full h-96 object-contain"/>

                            {/* Option 2: Fill container with potential cropping (alternative) */}
                            {/* <img src={src} alt={`Slide ${index}`} className="w-full h-auto object-cover" /> */}
                            </div>
                        ))
                    }
                </Slider>
            </div>

            <div className="grid grid-cols-1 gap-3 mt-3 md:mt-8 md:gap-0 md:flex md:justify-around md:items-center bg-gray-100 py-4 rounded-lg shadow-md ">
                <div className="flex md:flex-col items-center px-2 md:px-0">
                    <CiDeliveryTruck className="text-3xl mb-2"/>
                    <span className="text-sm font-medium px-4">Fast Free Shipping over KES {(1500).toLocaleString()}</span>
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
                <h1 className="uppercase font-bold text-center text-2xl my-10 underline">Product categories</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <Link to={"/collections/sockets"}>
                        <div className="category" style={{ backgroundImage: `url(${Sockets})` }}>
                            <span className="category-span">Sockets</span>
                        </div>
                    </Link>
                    <Link to={"/collections/electrical"}>
                        <div className="category" style={{ backgroundImage: `url(${CircuitBreaker})` }}>
                            <span className="category-span">Electrical Components</span>
                        </div>
                    </Link>
                    <Link to={"/collections/cctv-cameras"}>
                        <div className="category" style={{ backgroundImage: `url(${CCTV})` }}>
                            <span className="category-span">CCTV Cameras</span>
                        </div>
                    </Link>
                    <Link to={"/collections/communication-devices"}>
                        <div className="category" style={{ backgroundImage: `url(${IPPhone})` }}>
                            <span className="category-span">Communication devices</span>
                        </div>
                    </Link>
                    <Link to={"/collections/solar-products"}>
                        <div className="category " style={{ backgroundImage: `url(${Solar})`}}>
                            <span className="category-span">Solar Products</span>
                        </div>
                    </Link>
                    <Link to={"/collections/lighting"}>
                        <div className="category" style={{ backgroundImage: `url(${Lighting})` }}>
                            <span className="category-span">Lights</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="mt-3 px-2 lg:px-12">
                <h1 className="uppercase text-center font-bold text-2xl underline my-10">Product display</h1>
                <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} spaceBetween={15} slidesPerView={1} pagination={{ clickable: true }} autoplay={{ delay: 2500,disableOnInteraction: false }} breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 20,}, 768: { slidesPerView: 3,  spaceBetween: 15,}, 1024: {slidesPerView: 3, spaceBetween: 15,}}}>
                    <SwiperSlide className="pb-10">
                        <Link to={`/products/test`} className="card border border-gray-300">
                            <figure className="p-1">
                                <img src="https://lightingequipmentsales.com/wp-content/uploads/2017/11/LED-Bulb-Types-740x416.jpg" alt="Product Name" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Product title</h2>
                                <p className="card-text">This is a longer card with supporting text below as a natural</p>
                                <p className="font-bold uppercase text-lg">KES {(1500).toLocaleString()}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/products/test`} className="card border border-gray-300">
                            <figure className="p-1">
                                <img src="https://lightingequipmentsales.com/wp-content/uploads/2017/11/LED-Bulb-Types-740x416.jpg" alt="Product Name" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Product title</h2>
                                <p className="card-text">This is a longer card with supporting text below as a natural</p>
                                <p className="font-bold uppercase text-lg">KES {(1500).toLocaleString()}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/products/test`} className="card border border-gray-300">
                            <figure className="p-1">
                                <img src="https://lightingequipmentsales.com/wp-content/uploads/2017/11/LED-Bulb-Types-740x416.jpg" alt="Product Name" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Product title</h2>
                                <p className="card-text">This is a longer card with supporting text below as a natural</p>
                                <p className="font-bold uppercase text-lg">KES {(1500).toLocaleString()}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/products/test`} className="card border border-gray-300">
                            <figure className="p-1">
                                <img src="https://lightingequipmentsales.com/wp-content/uploads/2017/11/LED-Bulb-Types-740x416.jpg" alt="Product Name" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Product title</h2>
                                <p className="card-text">This is a longer card with supporting text below as a natural</p>
                                <p className="font-bold uppercase text-lg">KES {(1500).toLocaleString()}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
                
            </div>
            <Footer/>
        </>
    )
}

export default Shop
