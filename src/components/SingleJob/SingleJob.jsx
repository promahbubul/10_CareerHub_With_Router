import { useLoaderData, useLocation, useParams } from "react-router-dom";
import PageHeader from "../PageHeader/PageHeader";
import { useEffect } from "react";
import Button from "../Button/Button";
import JobSideBar from "./JobSideBar";
import Details from "./Details";
import JobContent from "./JobContent";
import { getLocalStorage, saveAppliedJob } from "../../utils/localStorage";
import { useState } from "react";

const SingleJob = () => {
  const { pathname } = useLocation();
  const [appliedJobs, setAppliedJobs] = useState();
  const { id } = useParams();
  const jobs = useLoaderData();
  const parseId = parseInt(id);
  const job = jobs.find((job) => job?.id === parseId);

  useEffect(() => {
    window.scrollTo(0, 0);
    const jobs = getLocalStorage();
    setAppliedJobs(jobs);
  }, [pathname]);

  const handleApplyJob = (id) => {
    saveAppliedJob(id);
    const jobs = getLocalStorage();
    setAppliedJobs(jobs);
  };

  return (
    <div>
      <PageHeader>Job Details</PageHeader>
      <div className="flex mt-32 flex-row  max-w-7xl mx-auto items-start gap-6">
        <JobContent job={job} />
        <JobSideBar
          appliedJobs={appliedJobs}
          handleApplyJob={handleApplyJob}
          job={job}
        />
      </div>
    </div>
  );
};
export default SingleJob;
