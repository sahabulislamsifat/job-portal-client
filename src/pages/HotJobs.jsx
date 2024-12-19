import { map } from "motion/react-client";
import React, { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  return (
    <div>
      {jobs.map((job) => (
        <HotJobCard key={job._id} job={job}></HotJobCard>
      ))}
    </div>
  );
};

export default HotJobs;
