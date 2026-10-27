
type TimelineItem = {
  period: string;
  title: string;
  place: string;
  type: "Education" | "Internship" | "Work";
};

const timeline: TimelineItem[] = [
  {
    period: "2026 – Present",
    title: "Web Development",
    place: "SWAT: Student Web Assisting Team",
    type: "Work",
  },
  {
    period: "Jan – Mar 2025",
    title: "Internship",
    place: "CPHDigital",
    type: "Internship",
  },
  {
    period: "2023 – 2025",
    title: "Multimediedesign AP",
    place: "EK",
    type: "Education",
  },
];

export default function WorkExperience() {
  return (
    <div>
      <p className="subtitle">TIMELINE</p>
      <h3 className="title">School & Work </h3>

      <ol className="relative mt-8 ml-2 border-l border-(--card-border)">
        {timeline.map(({ period, title, place, type }) => (
          <li key={`${period}-${place}`} className="mb-8 ml-6 last:mb-0">
            <span
              className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-(--background) bg-(--foreground)"
              aria-hidden="true"
            />
            <time className="text-sm text-(--muted)">{period}</time>
            <h4 className="text-lg font-semibold">{title}</h4>
            <p className="text-(--card-text)">
              {place} · {type}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}