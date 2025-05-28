import { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useEffect } from "react";
import FeatureJobCard from "./FeatureJobCard";
import Button from "../Button/Button";

const FeaturedJob = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

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
        {jobs?.slice(0, dataLength)?.map((job) => (
          <FeatureJobCard job={job} key={job?.id} />
        ))}
      </div>
      <div
        className={`text-center mt-10 ${
          dataLength === jobs.length && "hidden"
        }`}
      >
        <Button onClick={() => setDataLength(jobs?.length)}>
          See All Jobs
        </Button>
      </div>
    </div>
  );
};
export default FeaturedJob;
