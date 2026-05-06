import React, { useState } from "react";
import Icon from "../components/Icon.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

function AccordionItem({ title, open, onToggle, children }) {
  return (
    <article className={open ? "accordion-item open" : "accordion-item"}>
      <button type="button" onClick={onToggle}>
        <span>{title}</span>
        <Icon name="chevron" />
      </button>
      {open && <div className="accordion-content">{children}</div>}
    </article>
  );
}

export default function Legal() {
  const [open, setOpen] = useState("editor");

  return (
    <section className="container page-section legal-page">
      <SectionHeading>Mentions légales</SectionHeading>
      <div className="accordion legal-accordion">
        <AccordionItem
          title="Éditeur du site"
          open={open === "editor"}
          onToggle={() => setOpen(open === "editor" ? "" : "editor")}
        >
          <h2>John Doe</h2>
          <p><Icon name="map" small />40 rue Laure Diebold</p>
          <p><Icon name="pin" small />69009 Lyon, France</p>
          <p><Icon name="phone" small />10 20 30 40 50</p>
          <p><Icon name="mail" small />john.doe@gmail.com</p>
        </AccordionItem>
        <AccordionItem
          title="Hébergeur"
          open={open === "host"}
          onToggle={() => setOpen(open === "host" ? "" : "host")}
        >
          <h2>Always Data</h2>
          <p>91 rue du Faubourg Saint-Honoré</p>
          <p>75008 Paris</p>
          <p>
            <a href="https://www.alwaysdata.com" target="_blank" rel="noreferrer">
              www.alwaysdata.com
            </a>
          </p>
        </AccordionItem>
        <AccordionItem
          title="Crédits"
          open={open === "credits"}
          onToggle={() => setOpen(open === "credits" ? "" : "credits")}
        >
          <h2>Crédits</h2>
          <p>Site développé par John Doe, étudiant du CEF.</p>
          <p>Les images libres de droit sont issues du support de cours fourni pour le projet.</p>
        </AccordionItem>
      </div>
    </section>
  );
}
