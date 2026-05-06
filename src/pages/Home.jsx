import React from "react";
import { skills } from "../data.js";
import SectionHeading from "../components/SectionHeading.jsx";

function Hero({ onOpenGithub }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Bonjour, je suis John Doe</h1>
        <p>Développeur web full stack</p>
        <button className="btn btn-danger" type="button" onClick={onOpenGithub}>
          En savoir plus
        </button>
      </div>
    </section>
  );
}

export default function Home({ onOpenGithub }) {
  return (
    <>
      <Hero onOpenGithub={onOpenGithub} />
      <section className="about-card container">
        <article>
          <SectionHeading align="left">À propos</SectionHeading>
          <img className="about-image" src="/images/john-doe-about.jpg" alt="John Doe au travail" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus
            consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure
            enim placeat? Natus, neque at?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus
            consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure
            enim placeat? Natus, neque at?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus
            consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure
            enim placeat? Natus, neque at?
          </p>
        </article>
        <article>
          <SectionHeading align="left">Mes compétences</SectionHeading>
          <div className="skills-list">
            {skills.map((skill) => (
              <div className="skill" key={skill.name}>
                <span>
                  {skill.name} {skill.value}%
                </span>
                <div className="progress" aria-label={`${skill.name} ${skill.value}%`}>
                  <div style={{ width: `${skill.value}%`, backgroundColor: skill.color }} />
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}
