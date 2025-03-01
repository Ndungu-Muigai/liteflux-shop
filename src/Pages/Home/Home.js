import Intro from "./Intro";
import About from "./About";
import Services from "./Services";
import Gallery from "./Gallery";
import Stats from "./Stats";
import Footer from "../../Components/Footer"

const Home = () => 
{
    return ( 
        <>
            <Intro/>
            <About/>
            <Services/>
            <Gallery/>
            <Stats/>
            <Footer/>
        </>
     );
}
 
export default Home;