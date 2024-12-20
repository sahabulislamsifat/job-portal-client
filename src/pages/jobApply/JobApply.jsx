import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = UseAuth();
  const navigate = useNavigate();
  // console.log(id, user);

  const submitJobApplication = (event) => {
    event.preventDefault();
    const form = event.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
    };

    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true,
          });
          navigate("/myApplications");
        }
      });

    // console.log(linkedIn, github, resume);
  };

  return (
    <div className="h-screen justify-center items-center flex">
      <div className="card bg-gray-300 w-6/12  rounded-sm shadow-lg">
        <form onSubmit={submitJobApplication} className="card-body">
          <h2 className="text-2xl text-center font-bold">
            Apply Job And <br /> Good Luck!
          </h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">LinkedIn</span>
            </label>
            <input
              type="url"
              name="linkedIn"
              placeholder="LinkedIn URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">GitHub</span>
            </label>
            <input
              type="url"
              name="github"
              placeholder="GitHub URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Resume</span>
            </label>
            <input
              type="url"
              name="resume"
              placeholder="Resume URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn border-none rounded-none bg-green-500 font-bold">
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
