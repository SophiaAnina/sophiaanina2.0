"use client"
import { useState } from "react";
import Techstack from "./techstack";
import WorkExperience from "./work-experience";

export default function TechstackTimeline() {
  const [activeSkills, setActiveSkills] = useState<string[] | undefined>();

  return (
    <div className="container_2-1">
      <Techstack activeSkills={activeSkills} />
      <WorkExperience onHover={setActiveSkills} />
    </div>
  );
}
