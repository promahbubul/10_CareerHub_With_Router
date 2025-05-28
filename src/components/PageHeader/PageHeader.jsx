import watermarkTop from "../../assets/images/bg2.png";
import watermarkBottom from "../../assets/images/bg1.png";
const PageHeader = ({ children }) => {
  return (
    <>
      <img src={watermarkTop} alt="" className="absolute top-0 right-0" />
      <div className="bg-gradient-to-r pt-14 pb-28 from-liner-from/5 to-liner-to/5 relative">
        <img
          src={watermarkBottom}
          alt=""
          className="absolute left-0 bottom-0"
        />
        <h1 className="text-dark-1 text-center font-extrabold text-[32px] font-manrope">
          {children}
        </h1>
      </div>
    </>
  );
};
export default PageHeader;
