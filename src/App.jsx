import React, { useEffect, useMemo, useState } from "react";
import { pageTitles } from "./data.js";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import GithubModal from "./components/GithubModal.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";
import Legal from "./pages/Legal.jsx";

function getCurrentPath() {
  const hashPath = window.location.hash.replace(/^#/, "");
  if (pageTitles[hashPath]) return hashPath;
  if (pageTitles[window.location.pathname]) return window.location.pathname;
  return "/";
}

export default function App() {
  const [path, setPath] = useState(getCurrentPath);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const updatePath = () => setPath(getCurrentPath());
    window.addEventListener("popstate", updatePath);
    window.addEventListener("hashchange", updatePath);
    return () => {
      window.removeEventListener("popstate", updatePath);
      window.removeEventListener("hashchange", updatePath);
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
    if (path === "/services") return <Services />;
    if (path === "/portfolio") return <Portfolio />;
    if (path === "/contact") return <Contact />;
    if (path === "/mentions-legales") return <Legal />;
    return <Home onOpenGithub={() => setModalOpen(true)} />;
  }, [path]);

  return (
    <div className="app-shell">
      <Header
        path={path}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((value) => !value)}
        onNavigate={navigate}
      />
      <main className="site-main">{page}</main>
      <Footer onNavigate={navigate} />
      {modalOpen && <GithubModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}
