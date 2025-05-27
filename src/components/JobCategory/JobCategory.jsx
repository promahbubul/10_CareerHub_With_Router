import { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useEffect } from "react";
import Category from "./Category";

const JobCategory = () => {
  const [categores, setCategories] = useState([]);

  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  
  return (
    <div className="max-w-7xl mx-auto mt-32">
      <SectionHeading
        subTitle={
          "Explore thousands of job opportunities with all the information you need. Its your future"
        }
        title={"Job Category List"}
      />
      <div className="flex mt-8 flex-row items-center gap-6">
        {
            categores?.map(category => <Category key={category?.id} category={category} />)
        }
      </div>
    </div>
  );
};
export default JobCategory;
