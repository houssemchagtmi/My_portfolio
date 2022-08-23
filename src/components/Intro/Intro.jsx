import React from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import me from "../../img/moi (2).png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import { motion } from "framer-motion";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };


  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: "white" }}>Hi! I Am</span>
          <span>Houssem Eddin Chagtmi</span>
          <span>
            " Full-stack js web Developer, I can design, plan, research and develop, and I have a team spirit, as I have worked in several professions that require team cooperation, and most importantly, I am a positive person and I love progressand and I love my work."
          </span>
        </div>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/houssemchagtmi" target='_blanck'>
            <img src={Github} alt="" />
          </a>

          <a href="https://www.linkedin.com/in/houssem-eddin-chagtmi-6a0a6322b/" target='_blanck'>
            <img src={LinkedIn} alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={me} className='w-72' alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "20rem", top: "18rem" }}
          whileInView={{ left: "10rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
