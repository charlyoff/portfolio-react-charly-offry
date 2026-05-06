import React from "react";
import { navItems } from "../data.js";

function handleNav(event, path, onNavigate) {
  event.preventDefault();
  onNavigate(path);
}

export default function Header({ path, menuOpen, onToggleMenu, onNavigate }) {
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
