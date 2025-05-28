import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link, Links } from "react-router-dom";
import { navlinks } from "../../constants/navlinks.constant";
import footerNavItems from "../../constants/footerNavLinks.constant";

const FooterTop = () => {
  return (
    <div className="max-w-7xl mx-auto mb-12 flex flex-row items-start justify-between gap-32">
      <div className="w-3/12">
        <Link
          className="text-[32px] mb-5 inline-block font-extrabold text-white font-manrope"
          to={"/"}
        >
          CareerHub
        </Link>
        <p className="text-base font-manrope text-white/70 font-normal">
          There are many variations of passages of Lorem Ipsum , but the
          majority have suffered alteration in some form.
        </p>
        <div className="flex flex-row mt-5 items-center gap-4">
          <a
            href=""
            className="py-[11px] px-[12px] block w-max text-2xl bg-white rounded-full text-[#337FFF]"
          >
            <FaFacebookF />
          </a>
          <a
            href=""
            className="py-[11px] px-[12px] block w-max text-2xl bg-white rounded-full text-[#33CCFF]"
          >
            <FaTwitter />
          </a>
          <a
            href=""
            className="py-[11px] px-[12px] block w-max text-2xl  rounded-full text-red-500 bg-white"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="w-9/12 grid grid-cols-4 justify-between">
        {footerNavItems.map((footerItem) => (
          <div key={footerItem?.id} className="w-full">
            <h1 className="font-manrope mb-3 text-white text-xl font-semibold">
              {footerItem?.title}
            </h1>
            <div className="flex flex-col gap-2 text-base font-normal text-white/70 font-manrope">
              {footerItem?.menus?.map((menu) =>
                menu?.link ? (
                  <Link key={menu?.id} to={menu?.link}>
                    {menu?.title}
                  </Link>
                ) : (
                  <p key={menu?.id}>{menu?.title}</p>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FooterTop;
