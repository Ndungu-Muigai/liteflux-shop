import { Link } from "react-router-dom";

const Intro = () => {
    return (
        <div className="home mt-24 h-4/6 flex justify-end items-center bg-cover bg-center">
            <div className="text-white mx-12">
                <h1 className="text-4xl font-bold uppercase">Liteflux Enterprises</h1>
                <p className="text-lg mt-4 mb-6">Powering your tomorrow with precision and quality</p>
                <Link to="/shop" className="btn bg-background text-white px-6 w-48 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mx-auto">Shop now</Link>
            </div>
        </div>
    );
}

export default Intro;
