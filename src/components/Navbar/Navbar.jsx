import { Link, NavLink } from "react-router-dom";
import { navlinks } from "../../constants/navlinks.constant";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r px-5 2xl:px-0 from-[#7E90FE]/5 to-[#9873FF]/5">
      <nav className="max-w-7xl mx-auto pt-14 pb-10 flex justify-between items-center">
        <div className="">
          <Link to={"/"}>
            <h1 className="text-dark-1 font-manrope font-extrabold text-[32px]">
              CareerHub
            </h1>
          </Link>
        </div>
        <div className="flex flex-row font-manrope text-base font-bold items-center gap-10 ">
          {navlinks.map((navItem) => (
            <NavLink
              to={navItem?.link}
              className={({ isActive }) =>
                isActive
                  ? "text-transparent bg-gradient-to-r  from-liner-from to-liner-to bg-clip-text"
                  : "text-dark-3 font-medium"
              }
              key={navItem?.id}
            >
              {navItem?.title}
            </NavLink>
          ))}
        </div>
        <div className="">
          <button className="py-5 px-7 rounded-lg text-xl font-bold text-white bg-gradient-to-r from-liner-from to-liner-to active:from-liner-from active:to-liner-to cursor-pointer hover:scale-[98%] duration-300 hover:from-liner-to hover:to-liner-from active:scale-[103%]">
            Star Applying
          </button>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
