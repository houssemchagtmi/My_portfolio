import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { motion } from "framer-motion";
import Resume from './resum.pdf';

const Services = () => {


  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className=" px-12 flex w-[90vw] h-[30rem] flex-wrap  justify-between  mb-32 " id="services">
      {/* left side */}
      <div className="flex flex-col relative gap-5 pt-44">
        <span className="text-white text-4xl font-bold ">My Awesome</span>
        <span className=" text-orange-500 text-4xl font-bold " >services</span>
        <span className="text-gray-500 mt-4 text-base">
          "These are the techniques I use, especially the front-end techniques"
        </span>
        <a href={Resume} download>
          <button className="button w-32 h-8 mt-4">Download CV</button>
        </a>
        <div className="top-52 -left-72" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards w-1/2 md:flex md:flex-col md:gap-72 relative">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Design"}
            detail={"Figma, Photoshop, Adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Front-End"}
            detail={"Html, Css, React, Bootstrap, Tailwind, Sass, JQuery, Material-UI, Styled-Component"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Back-End"}
            detail={
              "Node.js, Express.js, MongoDB, Firebase, Socket.io ,Cloudinary"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className=" left-56 top-32 bg-purple-800"

        ></div>
      </div>
    </div>
  );
};

export default Services;
