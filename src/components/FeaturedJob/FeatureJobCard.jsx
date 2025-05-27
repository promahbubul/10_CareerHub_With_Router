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

  /*
    {
      "id": 1,
      "logo": "https://i.ibb.co/PzrbTxh/google-1-1-1.png",

      "job_title": "Technical Database Engineer",
      "company_name": "Google LLC",
      "remote_or_onsite": "Remote",
      "location": "Dhaka, Bangladesh",
      "job_type": "Full Time",
      "salary": "100k-150k",
      "job_description": " A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.",
      "job_responsibility": "Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.",
      "educational_requirements": "Bachelor degree to complete any reputational university.",
      "experiences": "2-3 Years in this field.",
      "contact_information": {
        "phone": "01750-00 00 00",
        "email": "info@gmail.com",
        "address": "Dhanmondi 32, Sukrabad Dhaka, Bangladesh"
      }
    */
  return (
    <div className="border border-dark-6 p-10 flex flex-col rounded-lg">
      <div className="">
        <img src={logo} alt="" className="" />
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
