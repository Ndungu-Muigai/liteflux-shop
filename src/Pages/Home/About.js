import SolarImage from "../../Assets/Images/Solar-Panels.jpg";

const About = () => 
{
    return (
        <section className="flex flex-col lg:flex-row lg:justify-between space-y-2 lg:space-x-4 m-2">
            <img src={SolarImage} alt="Solar Panel" className="w-full lg:w-2/5 rounded-lg hidden lg:block"/>
            <div className="w-full lg:w-3/5 leading-8">
                <h2 className="font-bold uppercase text-center text-xl">Harness the power of the sun with our solar Panels!</h2>
                <p>
                    Lite Flux Enterprises is a full-service electrical and technological Service Provider offering its services here in Kenya, East Africa and beyond. Our services range from electrical installations, solar, structural cabling, fiber, security systems such as CCTVs, 
                    Alarms, electrical fence to automatic gates, and so on. We are passionate about providing sustainable energy solutions to power your life. 
                    With a wide range of high-quality and affordable solar panels and electrical products.
                    With our expertise and passion for sustainability, we're here to help you power your life with Quality and pocket-friendly services.
                    As a leading provider of solar panels and electrical solutions in Kenya, we pride ourselves on delivering high-quality, reliable products that empower homes, businesses, and communities. 
                    We analyze specific customer’s needs and then provide solutions that resolve them specifically and accordingly.
                </p>
            </div>
        </section>
    );
}

export default About;
