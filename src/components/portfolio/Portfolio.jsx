import React, { useState } from "react";
import "./portfolio.css";
import { Works } from "./data";
function Portfolio() {
  const [works, setWorks] = useState(Works);
  const setPart = (category) => {
    if (category === "all") {
      setWorks(Works);
      return;
    }
    const newWorks = Works.filter((work) => work.category === category);
    setWorks(newWorks);
  };

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Recent Works</h2>
      <div className="work__filters">
        <span className="works__item" onClick={() => setPart("all")}>
          All
        </span>
        <span className="works__item" onClick={() => setPart("Java")}>
          Java
        </span>
        <span className="works__item" onClick={() => setPart("NodeJS")}>
          NodeJS
        </span>
        <span className="works__item" onClick={() => setPart("Java Web")}>
          Java Web
        </span>
        <span className="works__item" onClick={() => setPart("ReactJS")}>
          ReactJS
        </span>
      </div>
      <div className="work__container gird">
        {works.map((work) => {
          const { id, image, title, category, desc, link, linksrc } = work;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" />
                <div className="work__mask"></div>
              </div>
              <h3 className="work__category">{category}</h3>
              <h3 className="work__title">{title}</h3>
              <p className="work__desc">{desc}</p>

              <a href={linksrc} className="work__button" target="_blank">
                View Source Code
                <i className="icon-link work__button"></i>
              </a>

              <a href={link} className="work__button" target="_blank">
                View Demo
                <i className="icon-link work__button"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
