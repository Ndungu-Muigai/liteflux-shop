import { FaBriefcase, FaRegSmile, FaRegClock, FaLaptop } from "react-icons/fa";

const Stats = () => {
    return (
        <>
            <div className="grid md:grid-cols-4 gap-8 mt-8 mx-4 text-center">
                <div className="stat">
                    <FaBriefcase className="stat-icon text-blue-500" />
                    <h3 className="stat-h3">12</h3>
                    <p className="stat-p">Employees</p>
                </div>
                <div className="stat">
                    <FaRegSmile className="stat-icon text-green-500" />
                    <h3 className="stat-h3">500</h3>
                    <p className="stat-p">Happy clients</p>
                </div>
                <div className="stat">
                    <FaRegClock className="stat-icon text-yellow-500"/>
                    <h3 className="stat-h3">5</h3>
                    <p className="stat-p">Years of experience</p>
                </div>
                <div className="stat">
                    <FaLaptop className="stat-icon text-red-500" />
                    <h3 className="stat-h3">50</h3>
                    <p className="stat-p">Projects underway</p>
                </div>
            </div>
        </>
    );
};

export default Stats;
