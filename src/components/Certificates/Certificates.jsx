import React from "react";
import "./Certificates.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import gomycode from "../../img/Certif gomycode.PNG";
import dev_web from "../../img/linkedin certification dev web.PNG";
import chef_de_projet from "../../img/linkedin certification chef de projet.PNG";
const Portfolio = () => {

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: 'white' }}>Portfolio</span>
      <span>Recent Certificates</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://learn.gomycode.co/credentials/447a5bf3-85b0-4fcf-a6bb-aa7eeb434ea4/GYAOARMHSYYSCALOCEDEEEONI-CN-TC-O/00007294"
           target='_blanck'>
            <img src={gomycode} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://www.linkedin.com/learning/paths/devenir-developpeur-developpeuse-web-front-end"
            target='_blanck'>
            <img src={dev_web} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://www.linkedin.com/learning/paths/devenir-chef-cheffe-de-projet"
            target='_blanck'>
            <img src={chef_de_projet} alt="" />
          </a>
        </SwiperSlide>

      </Swiper>
    </div >
  );
};

export default Portfolio;
