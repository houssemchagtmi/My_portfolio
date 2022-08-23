import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span className="text-2xl">houssemchagtmii@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.facebook.com/houssem.chagtmi.12"  target='_blanck'>
            <Facebook color="white" size={"3rem"} />
          </a>

          <a href="https://github.com/houssemchagtmi/" target='_blanck'>
            <Gitub color="white" size={"3rem"} />
          </a>

          <a href="https://www.linkedin.com/in/houssem-eddin-chagtmi-6a0a6322b/"  target='_blanck'>
            <Linkedin color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
