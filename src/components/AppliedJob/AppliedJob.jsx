import { useEffect } from "react";
import PageHeader from "../PageHeader/PageHeader";
import { getLocalStorage } from "../../utils/localStorage";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobsCard from "./JobsCard";

const AppliedJob = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState();

  useEffect(() => {
    const getApplyJobs = getLocalStorage();
    const newJobs = [];
    if (getApplyJobs.length > 0) {
      const remainning = jobs.filter((job) => getApplyJobs.includes(job.id));
      setAppliedJobs(remainning);
    }
  }, [jobs]);
  return (
    <>
      <PageHeader>Applied Jobs</PageHeader>
      <div className="max-w-7xl mt-32 mx-auto">
        <div className=""> </div>
        <div className="mt-8 space-y-6">
          {appliedJobs?.map((job) => (
            <JobsCard key={job?.id} {...job} />
          ))}
        </div>
      </div>
    </>
  );
};
export default AppliedJob;
