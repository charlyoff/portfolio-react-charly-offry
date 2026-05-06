export const pageTitles = {
  "/": "Accueil",
  "/services": "Services",
  "/portfolio": "Portfolio",
  "/contact": "Contact",
  "/mentions-legales": "Mentions légales"
};

export const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
  { label: "Mentions légales", path: "/mentions-legales" }
];

export const projects = [
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

export const skills = [
  { name: "HTML5", value: 90, color: "#dc3545" },
  { name: "CSS3", value: 80, color: "#0dcaf0" },
  { name: "JAVASCRIPT", value: 70, color: "#ffc107" },
  { name: "PHP", value: 60, color: "#198754" },
  { name: "REACT", value: 50, color: "#0d6efd" }
];

export const services = [
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
