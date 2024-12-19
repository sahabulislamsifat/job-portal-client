import React from "react";
import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    currency,
    description,
    requirements,
    responsibilities,
    company_logo,
    company,
  } = job;

  return (
    <div>
      <div className="card card-compact h-96 rounded-md border border-slate-300 shadow-md">
        <div className="flex gap-2 m-2">
          <figure>
            <img className="w-14" src={company_logo} alt="Shoes" />
          </figure>
          <div>
            <h4 className="text-2xl">{company}</h4>
            <p className="flex gap-1 items-center">
              <FaMapMarkerAlt /> {location}
            </p>
          </div>
        </div>
        <div className="card-body">
          <div className="flex items-center justify-between">
            <h2 className="card-title">{title}</h2>
            <div className="badge badge-info">New</div>
          </div>
          <p>{description}</p>
          <div className="flex gap-2 flex-wrap">
            {requirements.map((skill, index) => (
              <p
                key={index}
                className="border rounded-sm text-center px-2 hover:text-sky-600 hover:bg-gray-300"
              >
                {skill}
              </p>
            ))}
          </div>
          <div className="card-actions items-center justify-end">
            <p className="flex items-center">
              <FaDollarSign></FaDollarSign> Salary : {salaryRange.min} -{" "}
              {salaryRange.max} {salaryRange.currency}
            </p>
            <Link to={`/jobDetails/${_id}`}>
              <button className="btn btn-sm bg-green-500 rounded-sm border-none text-slate-700">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
