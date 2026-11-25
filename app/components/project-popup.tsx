"use client"
import { ReactNode, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { skills } from "./techstack";

export type ProjectMedia =
  | { type: "image"; src: StaticImageData }
  | { type: "video"; src: string }
  | { type: "component"; node: ReactNode };

interface ProjectPopupProps {
  name: string;
  description: string;
  media: ProjectMedia;
  tech: string[];
  onClose: () => void;
}

export default function ProjectPopup({ name, description, media, tech, onClose }: ProjectPopupProps){
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div
        className="popup"
        id={name}
        role="dialog"
        aria-modal="true"
        aria-label="Project details"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="popup-close"
          aria-label="Close popup"
          onClick={onClose}
        >
          &times;
        </button>
        {media.type === "video" && (
          <video
            className="popup-image"
            src={media.src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`${name} demo video`}
          />
        )}
        {media.type === "image" && (
          <Image className="popup-image" src={media.src} alt={`${name} screenshot`} />
        )}
        {media.type === "component" && media.node}
        <div className="popup-body">
          <h3>{name}</h3>
          <p>{description}</p>
          <p className="techstack-title">Techstack</p>
          {tech.length > 0 && (
            <ul className="popup-tech">
              {tech.map((techName) => {
                const skill = skills.find((s) => s.name === techName);
                return (
                  <li key={techName}>
                    {skill?.logo && <Image src={skill.logo} alt={`${techName} logo`} />}
                    {skill?.icon_logo}
                    <span>{techName}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}