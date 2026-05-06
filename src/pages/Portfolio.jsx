import React from "react";
import { projects } from "../data.js";
import PageBanner from "../components/PageBanner.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Portfolio() {
  return (
    <>
      <PageBanner />
      <section className="container page-section">
        <SectionHeading subtitle="Voici quelques-unes de mes réalisations.">Portfolio</SectionHeading>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={project.title} />
              <div className="project-body">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a className="btn btn-primary" href="#" onClick={(event) => event.preventDefault()}>
                  Voir le site
                </a>
              </div>
              <footer>{project.tech}</footer>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
