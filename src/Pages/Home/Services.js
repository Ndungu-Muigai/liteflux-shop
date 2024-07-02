import { FaNetworkWired } from "react-icons/fa";
import { BsFillRouterFill } from "react-icons/bs";
import { PiSolarPanelLight } from "react-icons/pi";
import { GiCctvCamera } from "react-icons/gi";

const Services = () => {
    return ( 
        <>
            <div className="relative text-center mt-8 mb-12">
                <h2 className="font-bold uppercase text-2xl services-h2 inline-block relative">Our Services</h2>
            </div>
            <div className="grid gap-5 m-2 md:m-10 md:grid-cols-2">
                <div className="service">
                    <FaNetworkWired className="service-icon"/>
                    <h3 className="service-h3">Structured cabling</h3>
                    <p>
                        We offer professionally standardized and optimized structured cabling that optimally supports multiple software and hardware’s. 
                        Also, we ensure that all the set of standards governing structured cabling specifying offices, and apartment buildings for data or voice communications are followed to the letter using various kind of cables
                    </p>
                </div>
                <div className="service">
                    <BsFillRouterFill className="service-icon"/>
                    <h3 className="service-h3">Fibre cabling</h3>
                    <p>
                        Fiber optic cabling offers significantly improved performance in terms of bandwidth, speed, safety, distance, reliability, interference and much more. Our Fiber cabling services are cost-effective and won’t hurt your pockets.
                    </p>
                </div>
                <div className="service">
                    <PiSolarPanelLight className="service-icon"/>
                    <h3 className="service-h3">Solar installation and maintenance</h3>
                    <p>
                        We offer full-service Solar installation and maintenance services with everything you need to power your home, office, school with clean solar energy. Our experienced solar engineers and technicians oversees the entire installation project providing a single point of contact and accountability throughout the life of your solar system.
                    </p>
                </div>
                <div className="service">
                    <GiCctvCamera className="service-icon"/>
                    <h3 className="service-h3">Security Systems installations</h3>
                    <p>
                        We understand that the security of the people and things that you value 
                        matters. For that matter, we offer various types of security systems, for both residential and commercial purposes. We install security systems that are modern, secure and with a single point of contact to ensure top-notch usability and reliability.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Services;
