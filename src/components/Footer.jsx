import React from "react";
import { navItems, projects } from "../data.js";
import Icon from "./Icon.jsx";

function handleNav(event, path, onNavigate) {
  event.preventDefault();
  onNavigate(path);
}

export default function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <section>
          <h2>John Doe</h2>
          <p>40 rue Laure Diebold</p>
          <p>69009 Lyon, France</p>
          <p>10 20 30 40 50</p>
          <p>john.doe@gmail.com</p>
          <div className="social-links" aria-label="Réseaux sociaux">
            <a href="https://github.com/github-john-doe" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Icon name="github" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <Icon name="twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Icon name="linkedin" />
            </a>
          </div>
        </section>
        <section>
          <h2>Liens utiles</h2>
          {navItems.map((item) => (
            <a key={item.path} href={`#${item.path}`} onClick={(event) => handleNav(event, item.path, onNavigate)}>
              {item.path === "/" ? "Accueil" : item.label}
            </a>
          ))}
        </section>
        <section>
          <h2>Mes dernières réalisations</h2>
          {projects.map((project) => (
            <a key={project.title} href="#/portfolio" onClick={(event) => handleNav(event, "/portfolio", onNavigate)}>
              {project.title}
            </a>
          ))}
        </section>
      </div>
    </footer>
  );
}
