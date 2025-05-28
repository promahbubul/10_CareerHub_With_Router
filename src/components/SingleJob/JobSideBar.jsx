import Button from "../Button/Button";
import Sidebarinfo from "./SidebarInfo";
import SideBarHeading from "./SideBarHeading";

const JobSideBar = ({ job, handleApplyJob, appliedJobs }) => {
  const appledJob = appliedJobs?.find((id) => id == job?.id);

  // console.log(appledJob);
  console.log(appledJob);
  return (
    <div className="w-4/12">
      <div className="bg-gradient-to-r from-liner-from/10 p-[30px] rounded-lg to-liner-to/10">
        <div className="">
          <SideBarHeading>Job Details</SideBarHeading>
          <Sidebarinfo title={"Salary"} value={job?.salary} />
          <Sidebarinfo title={"Job Title"} value={job?.job_title} />
        </div>
        <div className="mt-8">
          <h4 className="font-extrabold font-manrope text-dark-1 text-xl pb-6 mb-6 border-b border-b-liner-from/30">
            Contact Information
          </h4>
          <Sidebarinfo
            title={"Phone"}
            value={job?.contact_information?.phone}
          />
          <Sidebarinfo
            title={"Email"}
            value={job?.contact_information?.email}
          />
          <Sidebarinfo
            title={"Address"}
            value={job?.contact_information?.address}
          />
        </div>
      </div>
      {/* {appliedJobs.find()} */}

      {!appledJob ? (
        <Button
          onClick={() => handleApplyJob(job?.id)}
          className={"w-full mt-6"}
        >
          Apply Now
        </Button>
      ) : (
        <p className="text-purple-600 textxl font-medium text-center mt-5 underline">Already Applied</p>
      )}
    </div>
  );
};
export default JobSideBar;
