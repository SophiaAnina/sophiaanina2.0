"use client"
import Image from "next/image";
import { skills } from "./techstack";

export function filterProjectsByTech<T extends { tech: readonly string[] }>(
  projects: readonly T[],
  selectedTech: readonly string[],
): T[] {
  if (selectedTech.length === 0) return [...projects];
  return projects.filter((project) =>
    selectedTech.every((tech) => project.tech.includes(tech)),
  );
}

interface TechProjectFilterProps {
  selectedTech: string[];
  onChange: (selectedTech: string[]) => void;
  availableTech?: readonly string[];
}

export default function TechProjectFilter({ selectedTech, onChange, availableTech }: TechProjectFilterProps) {
  const options = availableTech
    ? skills.filter((s) => availableTech.includes(s.name))
    : skills;

  const toggle = (name: string) =>
    onChange(
      selectedTech.includes(name)
        ? selectedTech.filter((t) => t !== name)
        : [...selectedTech, name],
    );

  return (
    <section className="tech-filter" aria-label="Filter projects by techstack">
      <ul>
        {options.map(({ name, logo }) => {
          const active = selectedTech.includes(name);
          return (
            <li key={name}>
              <button
                type="button"
                className={active ? "tech-filter-chip active" : "tech-filter-chip"}
                aria-pressed={active}
                onClick={() => toggle(name)}
              >
                <Image src={logo} alt="" />
                <span>{name}</span>
              </button>
            </li>
          );
        })}
      </ul>
      {selectedTech.length > 0 && (
        <button type="button" className="tech-filter-clear" onClick={() => onChange([])}>
          Clear filters
        </button>
      )}
    </section>
  );
}
