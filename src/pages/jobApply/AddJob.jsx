import React from "react";
import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";

const AddJob = () => {
  const { user } = UseAuth();

  const handleJob = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    console.log(newJob);
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully Added Job",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <div className="my-10 w-10/12 mx-auto">
      <h3 className="text-3xl text-center font-semibold">Post a New Job</h3>
      <form onSubmit={handleJob} className="card-body">
        {/* Job Title  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Job Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            className="input input-bordered"
            required
          />
        </div>
        {/* Job Location  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Job Location"
            className="input input-bordered"
            required
          />
        </div>
        {/* Job Types  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Job Types</span>
          </label>
          <select
            name="job_type"
            className="select w-full border border-slate-300"
          >
            <option disabled selected>
              Pick A Job Type
            </option>
            <option>Full Time</option>
            <option>Intern</option>
            <option>Part-Time</option>
          </select>
        </div>
        {/* Job Field  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Job Field</span>
          </label>
          <select
            name="job_field"
            className="select w-full border border-slate-300"
          >
            <option disabled selected>
              Pick A Job Field
            </option>
            <option>Full Time</option>
            <option>Intern</option>
            <option>Part-Time</option>
          </select>
        </div>

        {/* Salary Range  */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Min</span>
            </label>
            <input
              type="text"
              name="min"
              placeholder="Min"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Max</span>
            </label>
            <input
              type="text"
              name="max"
              placeholder="Max"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Currency</span>
            </label>
            <select
              name="currency"
              className="select border border-slate-300 w-full max-w-xs"
            >
              <option disabled selected>
                Currency Type
              </option>
              <option>BDT</option>
              <option>USD</option>
              <option>EURO</option>
            </select>
          </div>
        </div>
        {/* Job Description  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">
              Job Description
            </span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered"
            placeholder="Write Description"
          ></textarea>
        </div>
        {/* Company Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">
              Company Name
            </span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="input input-bordered"
            required
          />
        </div>
        {/* Job Requirements  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">
              Job Requirements
            </span>
          </label>
          <textarea
            name="requirements"
            className="textarea textarea-bordered"
            placeholder="Put each requirements in a new line."
          ></textarea>
        </div>
        {/* Job Responsibilities  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">
              Job Responsibilities
            </span>
          </label>
          <textarea
            name="responsibilities"
            className="textarea textarea-bordered"
            placeholder="Write each Responsibilities in a new line."
          ></textarea>
        </div>
        {/* HR Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">HR Name</span>
          </label>
          <input
            type="text"
            name="hr_name"
            placeholder="HR Name"
            className="input input-bordered"
            required
          />
        </div>
        {/* HR Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">HR Email</span>
          </label>
          <input
            defaultValue={user?.email}
            type="email"
            name="hr_email"
            placeholder="HR Email"
            className="input input-bordered"
            required
          />
        </div>
        {/* Deadline */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Deadline</span>
          </label>
          <input
            type="date"
            name="deadline"
            placeholder="Job Deadline"
            className="input input-bordered"
            required
          />
        </div>
        {/* Company Logo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">
              Company Logo URL
            </span>
          </label>
          <input
            type="url"
            name="company_logo"
            placeholder="Company Logo URL"
            className="input input-bordered"
            required
          />
        </div>
        {/* Submit Button  */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
