import MenAtWork from '../../Assets/Gallery Images/Men at work.jpg'
import SolarInstallation from '../../Assets/Gallery Images/solar installation.jpg'
import Electrical from '../../Assets/Gallery Images/Electrical.jpg'
import Cabling from '../../Assets/Gallery Images/cabling.jpeg'
import CCTV from '../../Assets/Gallery Images/cctv.jpeg'
import NetworkCabling from '../../Assets/Gallery Images/network.jpeg'
const Gallery = () => 
{
    return (
        <section>
            <div className="relative text-center mt-8 mb-12">
                <h2 className="font-bold uppercase text-2xl services-h2 inline-block relative">Sample of our work</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-4">
                <div className="h-64">
                    <img src={MenAtWork} alt="Men at work" title="Solar Installation" className="gallery-img"/>
                </div>
                <div className="h-64">
                    <img src={SolarInstallation} alt="Solar installation" title="Installed Solar Panels" className="gallery-img"/>
                </div>
                <div className="h-64">
                    <img src={Electrical} alt="Electrical wiring" title="Electrical Wiring" className="gallery-img"/>
                </div>
                <div className="h-64">
                    <img src={Cabling} alt="Structured cabling" title="Structured cabling" className="gallery-img"/>
                </div>
                <div className="h-64">
                    <img src={CCTV} alt="CCTV installation" title="CCTV Installed" className="gallery-img"/>
                </div>
                <div className="h-64">
                    <img src={NetworkCabling} alt="Network cabling" title="Network cabling" className="gallery-img"/>
                </div>
            </div>
        </section>
    );
};

export default Gallery
