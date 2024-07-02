import Intro from "./Intro";
import About from "./About";
import Services from "./Services";
import Gallery from "./Gallery";
import Stats from "./Stats";

const Home = () => 
{
    return ( 
        <>
            <Intro/>
            <About/>
            <Services/>
            <Gallery/>
            <Stats/>
        </>
     );
}
 
export default Home;