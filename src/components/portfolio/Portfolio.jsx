import React, { useState } from "react";
import "./portfolio.css";
import { Works } from "./data";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

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
      <div>
        <CardGroup className="work_container">
          {works.map((work) => {
            const { id, image, title, category, desc, linkdemo, linksrc } =
              work;
            return (
              <Card key={id}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>
                    {title} | {category}
                  </Card.Title>
                  <Card.Text>{desc}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  {linksrc && (
                    <Button>
                      <a
                        href={linksrc}
                        className="work__button"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Source Code
                      </a>
                    </Button>
                  )}
                  {linkdemo && (
                    <Button>
                      <a
                        href={linkdemo}
                        className="work__button"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Demo
                      </a>
                    </Button>
                  )}
                </Card.Footer>
              </Card>
            );
          })}
        </CardGroup>
      </div>
    </section>
  );
}

export default Portfolio;
