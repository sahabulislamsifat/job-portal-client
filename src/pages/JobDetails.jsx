import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const JobDetails = () => {
  const { _id, title, company, deadline } = useLoaderData();

  return (
    <div className="m-10 h-screen text-center">
      <div className="mt-48">
        <h2 className="text-3xl">Job Detail For: {title}</h2>
        <p>Apply for: {company}</p>
        <p>Deadline: {deadline}</p>
        <Link to={`/jobApply/${_id}`}>
          <button className="btn btn-sm bg-green-500 rounded-sm border-none text-slate-700">
            Apply Now!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
