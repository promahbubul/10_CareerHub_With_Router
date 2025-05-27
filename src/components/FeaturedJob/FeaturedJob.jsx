import { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useEffect } from "react";
import FeatureJobCard from "./FeatureJobCard";

const FeaturedJob = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/data/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error(err));
  }, []);

  console.log(jobs);
  return (
    <div className="mt-32 max-w-7xl mx-auto">
      <SectionHeading
        title={"Featured Jobs"}
        subTitle={
          "Explore thousands of job opportunities with all the information you need. Its your future"
        }
      />
      <div className="mt-8 grid grid-cols-2 gap-6">
        {jobs?.map((job) => (
          <FeatureJobCard job={job} key={job?.id} />
        ))}
      </div>
    </div>
  );
};
export default FeaturedJob;
