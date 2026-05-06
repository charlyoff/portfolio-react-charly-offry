import React from "react";
import Icon from "../components/Icon.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Contact() {
  return (
    <section className="container page-section contact-page">
      <SectionHeading subtitle="Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.">
        Contact
      </SectionHeading>
      <div className="contact-card">
        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <SectionHeading align="left">Formulaire de contact</SectionHeading>
          <input type="text" placeholder="Votre nom" aria-label="Votre nom" />
          <input type="email" placeholder="Votre adresse email" aria-label="Votre adresse email" />
          <input type="tel" placeholder="Votre numéro de téléphone" aria-label="Votre numéro de téléphone" />
          <input type="text" placeholder="Sujet" aria-label="Sujet" />
          <textarea placeholder="Votre message" aria-label="Votre message" />
          <button className="btn btn-primary" type="submit">
            Envoyer
          </button>
        </form>
        <aside className="contact-details">
          <SectionHeading align="left">Mes coordonnées</SectionHeading>
          <h2>John Doe</h2>
          <address>
            <p><Icon name="map" small />40 rue Laure Diebold</p>
            <p><Icon name="pin" small />69009 Lyon, France</p>
            <p><Icon name="phone" small />10 20 30 40 50</p>
            <p><Icon name="mail" small />john.doe@gmail.com</p>
          </address>
          <iframe
            title="Carte de 40 rue Laure Diebold, Lyon"
            src="https://maps.google.com/maps?q=40%20rue%20Laure%20Diebold%2069009%20Lyon&t=&z=14&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </aside>
      </div>
    </section>
  );
}
