import React from "react";
import "./home.css";
import Me from "../../assets/avatar-3.svg";
import HeaderSocials from "./HeaderSocial";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
function About() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home_img" />
        <h1 className="home_name">Ngô Quang Huy</h1>
        <span className="home_education">I'm a Back-End Developer</span>
        <HeaderSocials />
        <a href="#" className="btn" target="_blank" on>
          Contact Me
        </a>
        <ScrollDown />
        <Shapes />
      </div>
    </section>
  );
}

export default About;
