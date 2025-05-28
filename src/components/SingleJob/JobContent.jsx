import Details from "./Details";

const JobContent = ({job}) => {
  return (
    <div className="w-8/12">
      <Details title={"Job Description"} value={job?.job_description} />
      <Details title={"Job Responsibility"} value={job?.job_responsibility} />
      <Details
        title={"Educational Requirements"}
        value={job?.educational_requirements}
        newLine={true}
      />
      <Details title={"Experiences"} value={job?.experiences} newLine={true} />
    </div>
  );
}
export default JobContent