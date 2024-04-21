import { CiLocationOn } from "react-icons/ci";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="w-28" src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="space-x-4 mt-4">
                    <button className="px-5 py-2 font-extrabold border rounded border-blue-400">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-blue-400">{job_type}</button>
                </div>
                <div className="flex mr-4">
                    <h1 className="flex mr-2"><CiLocationOn className="text-2xl" />
                        {location}</h1>
                    <h1 className="flex"><HiMiniCurrencyDollar className="text-2xl" /> {salary} </h1>
                </div>
                <div className="card-actions justify-start">
                    <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>

                </div>
            </div>
        </div>
    );
};

export default Job;