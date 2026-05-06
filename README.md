# Portfolio John Doe

Projet React réalisé pour le devoir "Créez un Portfolio avec React.js".

Ce projet correspond au portfolio responsive de John Doe, développeur web full stack. Il reprend les maquettes fournies dans le brief et contient les pages demandées : accueil, services, portfolio, contact et mentions légales.

## Prérequis

- Node.js
- npm

## Installation

```bash
npm install
```

## Lancer le projet

```bash
npm start
```

Le site est ensuite disponible sur l'adresse indiquée par Vite dans le terminal.

Sous Windows, vous pouvez aussi double-cliquer sur `lancer_portfolio.bat`.
Le script installe les dépendances si `node_modules` n'existe pas, puis lance le serveur Vite.

## Build de production

```bash
npm run build
npm run preview -- --host 127.0.0.1 --port 3000
```

## Pages réalisées

- Accueil avec présentation, compétences et modale GitHub
- Services
- Portfolio
- Contact
- Mentions légales
- Menu responsive mobile/tablette

## Technologies utilisées

- React
- Vite
- HTML5
- CSS3

## Objectifs du devoir couverts

- Mise en place d'un environnement de développement React avec Vite.
- Utilisation de Git avec des messages de commit explicites.
- Création d'interfaces utilisateur statiques en HTML, CSS et React.
- Mise en place d'une navigation entre les pages principales du portfolio.
- Adaptation responsive pour desktop, tablette et mobile.
- Respect des maquettes fournies pour les pages Accueil, Services, Portfolio, Contact et Mentions légales.
- Ajout de règles de base pour le référencement : langue du document, titre de page, description, balises sémantiques et textes alternatifs sur les images.
- Documentation du projet avec les prérequis, l'installation et les commandes de lancement.

## Validation

Le build de production a été vérifié avec la commande :

```bash
npm run build
```

Le fichier HTML généré a été contrôlé avec le validateur W3C Nu HTML Checker.
Résultat : aucune erreur et aucun message après correction.

Un résumé est disponible dans `docs/validation.md`.

## Version statique prête à ouvrir

Une version générée du site peut être ouverte directement avec `index.html` dans le dossier `site_pret_a_ouvrir`.
Cette version sert uniquement à vérifier rapidement le rendu dans le navigateur.
