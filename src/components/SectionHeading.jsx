import React from "react";

export default function SectionHeading({ children, subtitle, align = "center" }) {
  return (
    <header className={`section-heading ${align}`}>
      <h1>{children}</h1>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}
