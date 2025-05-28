import { FiMapPin } from "react-icons/fi";
import OutlineButton from "../OutlineButton/OutlineButton";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const JobsCard = ({
  id,
  logo,
  job_title,
  company_name,
  remote_or_onsite,
  salary,
  location,
  job_type,
}) => {
  /**
 {
    "id": 3,
    "logo": "https://download.logo.wine/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logo.wine.png",
    "job_title": "Software Engineer",
    "company_name": "Tesla",
    "remote_or_onsite": "Onsite",
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
  },
 */
  return (
    <div className="border border-dark-6 rounded-lg p-7 flex flex-row items-center justify-between">
      <div className="flex flex-row gap-6 items-start font-manrope">
        <div className="w-60 h-60 bg-dark-6 p-10 rounded-lg">
          <img src={logo} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="">
          <h1 className="text-2xl font-extrabold text-dark-2 mb-2">
            {job_title}
          </h1>
          <p className="text-dark-3 text-2xl font-semibold mb-4">
            {company_name}
          </p>
          <div className="flex flex-row items-center mt-4 gap-4 mb-4">
            <OutlineButton>{remote_or_onsite}</OutlineButton>
            <OutlineButton>{job_type}</OutlineButton>
          </div>
          <div className="flex flex-row items-center gap-4 ">
            <p className="text-xl font-semibold text-dark-3 font-manrope flex flex-row items-center gap-2">
              <FiMapPin /> {location}
            </p>
            <p className="text-xl font-semibold text-dark-3 font-manrope flex flex-row items-center gap-2">
              <AiOutlineDollar /> {salary}
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <Link to={`/jobs/${id}`}>
          <Button>View Details</Button>
        </Link>
      </div>
    </div>
  );
};
export default JobsCard;
