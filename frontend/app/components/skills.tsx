export default function Skills() {
  const focusWords: string[] = [
    "Application Development",
    "Frontend Development",
    "Developer Enviroments",
    "Fullstack Development",
    "Content Management System",
    "UI/UX Design",
    "SEO Optimization",
    "Sustainable User Experience",
  ];
  
  return (
    <div>
      <h2>Techstack</h2>
      <ul></ul>
    <div className="skills-carousel" aria-label="Areas of focus">
      <div className="skills-track">
        {focusWords.map((word, index) => (
          <h2 className={`skill-item skill-item-${index}`} key={word}>
            {word}
          </h2>
        ))}
        <h2 className="skill-item skill-item-0" aria-hidden="true">
          {focusWords[0]}
        </h2>
      </div>
    </div>
    </div>
  );
}