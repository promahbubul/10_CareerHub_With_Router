import Button from "../Button/Button";
import OutlineButton from "../OutlineButton/OutlineButton";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineDollar } from "react-icons/ai";

const FeatureJobCard = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    job_type,
    remote_or_onsite,
    salary,
    location,
  } = job;

  return (
    <div className="border border-dark-6 p-10 flex flex-col rounded-lg">
      <div className="w-[117px] h-[40]">
        <img src={logo} alt="" className="w-full h-full object-contain" />
      </div>
      <h2 className="text-2xl font-manrope font-extrabold   text-dark-2">
        {job_title}
      </h2>
      <p className="text-xl font-manrope font-semibold text-dark-3 mt-2 mb-4">
        {company_name}
      </p>
      <div className="flex flex-row items-center gap-4 mb-4">
        <OutlineButton>{remote_or_onsite}</OutlineButton>
        <OutlineButton>{job_type}</OutlineButton>
      </div>
      <div className="flex flex-row items-center gap-4 mb-6 ">
        <p className="text-xl font-semibold text-dark-3 font-manrope flex flex-row items-center gap-2">
          <FiMapPin /> {location}
        </p>
        <p className="text-xl font-semibold text-dark-3 font-manrope flex flex-row items-center gap-2">
          <AiOutlineDollar /> {salary}
        </p>
      </div>
      <div className="grow flex items-end h-auto ">
        <Button>View Details</Button>
      </div>
    </div>
  );
};
export default FeatureJobCard;
