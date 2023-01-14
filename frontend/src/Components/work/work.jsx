import React from "react";
import "./work.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Work = () => {
  return (
    <section className="work section" id="work">
      <h2 className="section__title">Work</h2>
      <span className="section__subtitle">My recent work</span>

      <Swiper
        className="work__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination]}>
        {Data.map(({ id, image, title, description, link }) => {
          return (
            <SwiperSlide className="work__card" key={id}>
              <a href={link} target="blank">
                <img src={image} alt="" className="work__img" />
                <h3 className="work__name">{title}</h3>
                <p className="work__description">{description}</p>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Work;
