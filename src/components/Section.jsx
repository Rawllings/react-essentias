import React from "react";

function Section({ title, children, ...styling }) {
  return (
    <section {...styling}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
