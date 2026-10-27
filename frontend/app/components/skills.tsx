import type { CSSProperties } from "react";

export default function Skills() {
  const categories = {
    frontend: "var(--skill-frontend)",
    software: "var(--skill-software)",
    tooling: "var(--skill-tooling)",
    content: "var(--skill-content)",
    design: "var(--skill-design)",
    sustainability: "var(--skill-sustainability)",
  };

  const focusWords: { text: string; color: string }[] = [
    { text: "Application Development", color: categories.software },
    { text: "Frontend Development", color: categories.frontend },
    { text: "Developer Enviroments", color: categories.tooling },
    { text: "Fullstack Development", color: categories.software },
    { text: "Content Management System", color: categories.content },
    { text: "UI/UX Design", color: categories.design },
    { text: "SEO Optimization", color: categories.content },
    { text: "Sustainable User Experience", color: categories.sustainability },
  ];

  return (
    <span
      className="skills-carousel"
      aria-label="Areas of focus"
      style={{ "--skills-count": focusWords.length } as CSSProperties}
    >
      {focusWords.map(({ text, color }, index) => (
        <span
          className="skill-word"
          key={text}
          style={
            { "--skill-index": index, "--skill-color": color } as CSSProperties
          }
        >
          {text}
        </span>
      ))}
    </span>
  );
}