import {  useLoaderData, useParams } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { saveJobApplication } from "../../Utility/localStrorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job); 


    const handleApplyJob = () =>{
        saveJobApplication(idInt);
        toast("Wow so easy!");
    }
    return (
        <div>
            
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details Coming hare</h2>
                    <h2 className="text-2xl">Job Details of: {job.job_title}</h2>
                    <p>{job.company_name}</p>
                </div>
                <div className="border ">
                    <h2 className="text-2xl">Side things</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">APPLY</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;