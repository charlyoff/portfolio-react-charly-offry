import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const pageTitles = {
  "/": "Accueil",
  "/services": "Services",
  "/portfolio": "Portfolio",
  "/contact": "Contact",
  "/mentions-legales": "Mentions légales"
};

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
  { label: "Mentions légales", path: "/mentions-legales" }
];

function getCurrentPath() {
  const hashPath = window.location.hash.replace(/^#/, "");
  if (pageTitles[hashPath]) return hashPath;
  if (pageTitles[window.location.pathname]) return window.location.pathname;
  return "/";
}

const projects = [
  {
    title: "Fresh Food",
    image: "/images/portfolio/fresh-food.jpg",
    description: "Site de vente de produits frais en ligne",
    tech: "Site réalisé avec PHP et MySQL"
  },
  {
    title: "Restaurant Akira",
    image: "/images/portfolio/restaurant-japonais.jpg",
    description: "Site de vente de produits frais en ligne",
    tech: "Site réalisé avec WordPress"
  },
  {
    title: "Espace bien-être",
    image: "/images/portfolio/espace-bien-etre.jpg",
    description: "Site de vente de produits frais en ligne",
    tech: "Site réalisé avec LARAVEL"
  },
  {
    title: "SEO",
    image: "/images/portfolio/seo.jpg",
    description: "Amélioration du référencement d'un site e-commerce",
    tech: "Utilisation des outils SEO"
  },
  {
    title: "Création d'une API",
    image: "/images/portfolio/coder.jpg",
    description: "Création d'une API RESTFULL publique",
    tech: "PHP - SYMFONY"
  },
  {
    title: "Maquette d'un site web",
    image: "/images/portfolio/screens.jpg",
    description: "Création du prototype d'un site",
    tech: "Réalisé avec FIGMA"
  }
];

const skills = [
  { name: "HTML5", value: 90, color: "#dc3545" },
  { name: "CSS3", value: 80, color: "#0dcaf0" },
  { name: "JAVASCRIPT", value: 70, color: "#ffc107" },
  { name: "PHP", value: 60, color: "#198754" },
  { name: "REACT", value: 50, color: "#0d6efd" }
];

const services = [
  {
    icon: "brush",
    title: "UX Design",
    text:
      "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible."
  },
  {
    icon: "code",
    title: "Développement web",
    text:
      "Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)."
  },
  {
    icon: "search",
    title: "Référencement",
    text:
      "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche. L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site."
  }
];

function App() {
  const [path, setPath] = useState(getCurrentPath);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onPopState = () => setPath(getCurrentPath());
    const onHashChange = () => setPath(getCurrentPath());
    window.addEventListener("popstate", onPopState);
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("popstate", onPopState);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  useEffect(() => {
    document.title = `${pageTitles[path] ?? "Accueil"} - John Doe`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [path]);

  const navigate = (nextPath) => {
    window.location.hash = nextPath;
    setPath(nextPath);
    setMenuOpen(false);
  };

  const page = useMemo(() => {
    if (path === "/services") return <ServicesPage />;
    if (path === "/portfolio") return <PortfolioPage />;
    if (path === "/contact") return <ContactPage />;
    if (path === "/mentions-legales") return <LegalPage />;
    return <HomePage onOpenGithub={() => setModalOpen(true)} />;
  }, [path]);

  return (
    <>
      <Header
        path={path}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((value) => !value)}
        onNavigate={navigate}
      />
      <main>{page}</main>
      <Footer onNavigate={navigate} />
      {modalOpen && <GithubModal onClose={() => setModalOpen(false)} />}
    </>
  );
}

function Header({ path, menuOpen, onToggleMenu, onNavigate }) {
  return (
    <header className="site-header">
      <a className="brand" href="#/" onClick={(event) => handleNav(event, "/", onNavigate)}>
        John Doe
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label="Ouvrir le menu"
        aria-expanded={menuOpen}
        onClick={onToggleMenu}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Navigation principale">
        {navItems.map((item) => (
          <a
            key={item.path}
            className={path === item.path ? "active" : ""}
            href={`#${item.path}`}
            onClick={(event) => handleNav(event, item.path, onNavigate)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function handleNav(event, path, onNavigate) {
  event.preventDefault();
  onNavigate(path);
}

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

function HomePage({ onOpenGithub }) {
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

function PageBanner() {
  return <div className="page-banner" role="presentation" />;
}

function ServicesPage() {
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

function PortfolioPage() {
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

function ContactPage() {
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

function LegalPage() {
  const [open, setOpen] = useState("editor");

  return (
    <section className="container page-section legal-page">
      <SectionHeading>Mentions légales</SectionHeading>
      <div className="accordion">
        <AccordionItem
          id="editor"
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
          id="host"
          title="Hébergeur"
          open={open === "host"}
          onToggle={() => setOpen(open === "host" ? "" : "host")}
        >
          <h2>Always Data</h2>
          <p>91 rue du Faubourg Saint-Honore</p>
          <p>75008 Paris</p>
          <p>
            <a href="https://www.alwaysdata.com" target="_blank" rel="noreferrer">
              www.alwaysdata.com
            </a>
          </p>
        </AccordionItem>
        <AccordionItem
          id="credits"
          title="Crédits"
          open={open === "credits"}
          onToggle={() => setOpen(open === "credits" ? "" : "credits")}
        >
          <h2>Crédits</h2>
          <p>Site développé par John Doe, étudiant du CEF.</p>
          <p>
            Les images libres de droit sont issues du support de cours fourni pour le projet.
          </p>
        </AccordionItem>
      </div>
    </section>
  );
}

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

function SectionHeading({ children, subtitle, align = "center" }) {
  return (
    <header className={`section-heading ${align}`}>
      <h1>{children}</h1>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}

function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <section>
          <h2>John Doe</h2>
          <p>40 rue Laure Diebold</p>
          <p>69009 Lyon, France</p>
          <p>10 20 30 40 50</p>
          <p>john.doe@gmail.com</p>
          <div className="social-links" aria-label="Reseaux sociaux">
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

function GithubModal({ onClose }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    let mounted = true;
    fetch("https://api.github.com/users/github-john-doe")
      .then((response) => (response.ok ? response.json() : Promise.reject(response)))
      .then((data) => {
        if (mounted) setProfile(data);
      })
      .catch(() => {
        if (mounted) {
          setProfile({
            login: "John Doe",
            name: "John Doe",
            html_url: "https://github.com/github-john-doe",
            avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
            bio: "As we all know, John Doe's identity is unknown. I just wanted to contribute without being known.",
            public_repos: 1,
            followers: 16,
            following: 0,
            location: ""
          });
        }
      });
    return () => {
      mounted = false;
    };
  }, []);

  const data = profile ?? {
    name: "John Doe",
    html_url: "https://github.com/github-john-doe",
    avatar_url: "",
    bio: "Chargement du profil GitHub...",
    public_repos: "",
    followers: "",
    following: "",
    location: ""
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="github-title">
      <article className="github-modal">
        <header>
          <h2 id="github-title">Mon profil GitHub</h2>
          <button type="button" aria-label="Fermer" onClick={onClose}>
            <Icon name="x" />
          </button>
        </header>
        <div className="github-content">
          {data.avatar_url ? <img src={data.avatar_url} alt="Avatar GitHub de John Doe" /> : <div className="avatar-placeholder" />}
          <div className="github-stats">
            <p><Icon name="user" small /><a href={data.html_url} target="_blank" rel="noreferrer">{data.name || data.login}</a></p>
            <p><Icon name="pin" small />{data.location || "\u00a0"}</p>
            <p><Icon name="card" small />{data.bio}</p>
            <p><Icon name="box" small />Repositories : {data.public_repos}</p>
            <p><Icon name="users" small />Followers : {data.followers}</p>
            <p><Icon name="users" small />Following : {data.following}</p>
          </div>
        </div>
        <footer>
          <button className="btn btn-secondary" type="button" onClick={onClose}>
            Fermer
          </button>
        </footer>
      </article>
    </div>
  );
}

function Icon({ name, small = false }) {
  const size = small ? 16 : 42;
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    className: small ? "icon small" : "icon"
  };

  const icons = {
    brush: <path d="M9.5 19.5c-1.9 1.9-4.4 1.9-5 1.3-.6-.6-.6-3.1 1.3-5 1.3-1.3 3.4-1.3 4.7 0 1.2 1.3 1.2 3.4-1 3.7ZM14 4 20 2l-2 6-8 8-4-4 8-8Z" />,
    code: <><path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>,
    chevron: <path d="m6 15 6-6 6 6" />,
    x: <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>,
    map: <><path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z" /><path d="M9 3v15" /><path d="M15 6v15" /></>,
    pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.4 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2Z" />,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></>,
    github: <path d="M15 22v-4a4 4 0 0 0-1-3c3 0 6-2 6-6 .1-1.2-.3-2.4-1-3.4.3-1.1.3-2.3 0-3.4 0 0-1 0-3 1.5a10.4 10.4 0 0 0-6 0C8 2.2 7 2.2 7 2.2c-.3 1.1-.3 2.3 0 3.4A5.5 5.5 0 0 0 6 9c0 4 3 6 6 6a4 4 0 0 0-1 3v4" />,
    twitter: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.5 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2Z" />,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
    user: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
    card: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M7 9h10M7 13h6" /></>,
    box: <><path d="m21 16-9 5-9-5V8l9-5 9 5v8Z" /><path d="m3.3 7.5 8.7 5 8.7-5" /><path d="M12 22V12" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9" /><path d="M16 3.1a4 4 0 0 1 0 7.8" /></>
  };

  return <svg {...props}>{icons[name]}</svg>;
}

createRoot(document.getElementById("root")).render(<App />);
