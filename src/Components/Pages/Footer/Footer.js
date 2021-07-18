import React, { useContext } from "react";
import "./Footer.css";
import { UserContext } from "../../../App";
import Frontend_Developer_OmarFaruk_Resume from "../../../Images/Frontend_Developer_OmarFaruk_Resume.pdf";

const Footer = () => {
  const [click, setClick] = useContext(UserContext);

  return (
    <>
      <div className={!click ? "footer-section active" : "footer-section"}>
        <div className="footer-section-left">
          <div className="footer-location">
            <h1>Location</h1>
            <h3>Daffodil Smart City, Ashulia, Dhaka</h3>
          </div>

          <div className="footer-location">
            <h1>E-Mail</h1>
            <h3>developer.omarfaruk@gmail.com</h3>
          </div>

          <div className="footer-location">
            <h1>Phone</h1>
            <h3>+880 1521 404561</h3>
          </div>
        </div>

        <div className="footer-section-right">
          <button>
            <a href={Frontend_Developer_OmarFaruk_Resume}>
              <i class="fas fa-angle-double-down"></i>&nbsp; Download Cv
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
