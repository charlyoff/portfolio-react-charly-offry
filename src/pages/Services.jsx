import React from "react";
import { services } from "../data.js";
import Icon from "../components/Icon.jsx";
import PageBanner from "../components/PageBanner.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Services() {
  return (
    <>
      <PageBanner />
      <section className="container page-section">
        <SectionHeading subtitle="Voici les prestations sur lesquelles je peux intervenir">
          Mon offre de services
        </SectionHeading>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <Icon name={service.icon} />
              <h2>{service.title}</h2>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
