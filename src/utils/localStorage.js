const getLocalStorage = () => {
  const appliedJobs = localStorage.getItem("jobs");
  const jobsParse = JSON.parse(appliedJobs);
  if (jobsParse) {
    return jobsParse;
  }
  return [];
};

const saveAppliedJob = (jobId) => {
  console.log(jobId);
  const jobs = getLocalStorage();
  const exisJob = jobs.find((job) => job == jobId);
  if (exisJob) {
    return;
  }

  jobs.push(jobId);
  console.log(jobs);
  localStorage.setItem("jobs", JSON.stringify(jobs));
};

export { saveAppliedJob, getLocalStorage };
