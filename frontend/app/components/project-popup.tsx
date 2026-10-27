"use client"
import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { skills } from "./techstack";

interface ProjectPopupProps {
  name: string;
  description: string;
  img?: StaticImageData;
  video?: string;
  tech: string[];
  onClose: () => void;
}

export default function ProjectPopup({ name, description, img, video, tech, onClose }: ProjectPopupProps){
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
        {video ? (
          <video
            className="popup-image"
            src={video}
            poster={img?.src}
          
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`${name} demo video`}
          />
        ) : (
          img && <Image className="popup-image" src={img} alt={`${name} screenshot`} />
        )}
        <div className="popup-body">
          <h3>{name}</h3>
          <p>{description}</p>
          <p className="techstack-title">Teachstack</p>
          {tech.length > 0 && (
            <ul className="popup-tech">
              {tech.map((techName) => {
                const skill = skills.find((s) => s.name === techName);
                return (
                  <li key={techName}>
                    {skill && <Image src={skill.logo} alt={`${techName} logo`} />}
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