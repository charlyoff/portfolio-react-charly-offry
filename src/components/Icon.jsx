import React from "react";

export default function Icon({ name, small = false }) {
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
