import { Link } from "react-router-dom";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <div className="bg-dark-1 py-32 mt-32 text-white">
      <FooterTop />
      <FooterBottom />
    </div>
  );
};
export default Footer;
