"use client"
type TimelineItem = {
  period: string;
  title: string;
  place: string;
  type: "Education" | "Internship" | "Work";
  techstack?: string[];
};

const timeline: TimelineItem[] = [
   {
    period: "2026 Jan – Present",
    title: "Webdevelopment",
    place: "EK",
    type: "Education",
    techstack: ["TypeScript", "MongoDB", "NestJS", "Python", "PostgreSQL", "Neo4j", "MariaDB", "Docker","Git"],
  },
  {
    period: "2026 Jan – Present",
    title: "Web Development",
    place: "SWAT: Student Web Assisting Team",
    type: "Work",
    techstack: ["React", "Next.js", "TypeScript", "Astro", "Git"],
  },
 
  {
    period: "Jan – Mar 2025",
    title: "Internship",
    place: "CPHDigital",
    type: "Internship",
    techstack: ["JavaScript", "PHP", "Wordpress", "Git"],
  },
  {
    period: "2023 – 2025",
    title: "Multimediedesign AP",
    place: "EK",
    type: "Education",
    techstack: ["Figma", "JavaScript", "React", "Astro", "Vite", "Git"],
  },  
  {
   period: "Sep 2022- Dec 2022",
    title: "Teknologi forståelse",
    place: "KP",
    type: "Education",
    techstack: ["Scratch"],
  },
  {
    period: "Sep 2021- Dec 2022",
    title: "Teacher college Math(Indskoling)",
    place: "KP",
    type: "Education",
  },

  {
    period: "Sep 2021- Dec 2022",
    title: "KLM: Kristendomskundskab Livsoplysning og Medborgerskab",
    place: "KP",
    type: "Education",
  },
  {
    period: "Sep 2021- Dec 2022",
    title: "Teachers assistant ",
    place: "KP",
    type: "Work",
  },
];


export default function WorkExperience({ onHover }: { onHover?: (techstack?: string[]) => void }) {
  return (
    <div id="Timeline">
      <p className="subtitle">TIMELINE</p>
      <h3 className="title">School & Work </h3>
     
      <ul>
        {timeline.map(({period, title, place, type, techstack}, index) =>(
          <li
            key={`${period}-${place}-${title}`}
            tabIndex={techstack ? 0 : undefined}
            onMouseEnter={() => onHover?.(techstack)}
            onMouseLeave={() => onHover?.(undefined)}
            onFocus={() => onHover?.(techstack)}
            onBlur={() => onHover?.(undefined)}
          >
            {period !== timeline[index - 1]?.period && (
              <p className="subtitle timeline-period">{period}</p>
            )}
            <span>
              <h4><b>{title}</b></h4>
              <p>{place} · {type} </p>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}