import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const home = () => {
  return (
    <section
      className="home section"
      id="home"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="600">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default home;
