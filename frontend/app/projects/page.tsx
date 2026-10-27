"use client"
import { useState } from "react";
import Nav from "../components/nav";
import Projects, { projectTech } from "../components/projects";
import TechProjectFilter from "../components/tech-project-filter";

export default function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);

  return (
    <div className="container">
      <Nav />
      <main>
        <div id="Projects">
          <h3>Projects</h3>
          <TechProjectFilter
            selectedTech={selectedTech}
            onChange={setSelectedTech}
            availableTech={projectTech}
          />
          <Projects selectedTech={selectedTech} />
        </div>
      </main>
    </div>
  );
}
