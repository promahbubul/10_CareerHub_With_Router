import { useLoaderData, useParams } from "react-router-dom";
import PageHeader from "../PageHeader/PageHeader";
import { useEffect } from "react";
import Button from "../Button/Button";
import JobSideBar from "./JobSideBar";
import Details from "./Details";
import JobContent from "./JobContent";

const SingleJob = () => {
  const { id } = useParams();
  const jobs = useLoaderData();
  const parseId = parseInt(id);
  const job = jobs.find((job) => job?.id === parseId);

  console.log(job);

  return (
    <div>
      <PageHeader>Job Details</PageHeader>
      <div className="flex mt-32 flex-row  max-w-7xl mx-auto items-start gap-6">
        <JobContent job={job} />
        <JobSideBar job={job} />
      </div>
    </div>
  );
};
export default SingleJob;
