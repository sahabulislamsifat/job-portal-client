import React, { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = UseAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [user.email]);

  return (
    <div className="my-24">
      <h2 className="text-3xl text-center">My Applications : {jobs.length}</h2>
      {jobs.map((job, index) => (
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    {index + 1}
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  Application View : {job.applicationCount}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>
                  <Link to={`/viewApplications/${job._id}`}>
                    <button className="btn btn-link">View Applications</button>
                  </Link>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default MyPostedJobs;
