"use client"
import { useCallback, useState } from "react";
import Image from "next/image";
import washworld from '../video/Washworld.mp4'
import cphbookinq from '../img/cphbookinq.png'
import boxboxclub from '../img/boxboxclub-startscreen.png'
import chatapp from '../img/chatapp.jpg'
import { skills } from "./techstack";
import ProjectPopup, { ProjectMedia } from "./project-popup";
import { FaArrowRightLong } from "react-icons/fa6";
import cphnordic from '../img/cph-nordic.png'
import ComingSoon from "./comingSoon";

interface PortfolioItem {
  id: number;
  name: string;
  description:string;
}
const skillsMap = Object.fromEntries(skills.map((s) => [s.name, s]));

const items: PortfolioItem[] = [
  {
    id:1,
    name:"Beerly",
    description:"For my Exam "
  },
   
  {
    id: 2,
    name: "ChatApp",
    description: "For this project I created a simple message app implementing authentication, and message threads. I used knowledge about normalization within Postgres to achive this. Additionaly I used NestJS with Typeorm to create a API with crud and authentication" ,
  },
  {
    id: 3,
    name: "Washworld",
    description: "For this project I created a web-app for the customers of the washhall company Washworld, which was split into a Next.js frontend and a Flask backend, with MariaDB for account and membership data. It supports customer registration, profile and membership management, wash locations, and starting a wash.",
  },
  
  {
    id: 4,
    name: "BOX BOX CLUB",
    description: "For this project I created BOXBOXCLUB, a Danish-language Formula 1 learning and fan-community mobile app, built with Expo and React Native. The features included authentication, avatar creation, a chat function with word restrictions, quizzes, and live API updates for each F1 race.",
  },
  {
    id:5,
    name: "CPH-Nordic",
    description:"For my internship project, I created CPH-Nordic brand website, showcasing the company's services and projects. The website was built with a combination of WordPress and custom web styletiles and templates to ensure a responsive and engaging user experience, working closely with the UX- and UI-designer and softwaredeveloper.",
  },
  {
    id: 6,
    name: "CPHbookinq",
    description: "For this project I created a web-app meant for booking meeting rooms and classrooms, with separate administrative access for teachers and staff. The technologies used for the application were React, Tanstack and Vite while Supabase were used for the database.",
  },
 
];

interface ProjectAssets {
  media: ProjectMedia;
  tech: string[];
}

const images: ProjectAssets[] = [
  {media:{type:"component", node:<ComingSoon/>}, tech:["Git","NestJS","React Native", "Postgress" ]},
  {media:{type:"image", src:chatapp}, tech:["Git","NestJS","React Native", "Postgress" ]},
  {media:{type:"video", src:"/video/washworld.mp4"}, tech:["Docker","Figma","Git","MariaDB","Python","React","TypeScript"]},
  {media:{type:"image", src:boxboxclub}, tech:["Git","JavaScript","React Native", "Supabase", ]},
  {media:{type:"image", src:cphnordic}, tech:["Wordpress","HTML/CSS", "PHP","Git", ]},
  {media:{type:"image", src:cphbookinq}, tech:["Git","React", "Vite","TypeScript","Supabase", ]},
]



export default function Projects(){

  const closePopup = useCallback(() => setSelected(null), []);

  const [selected, setSelected] = useState<number | null>(null);

    return(
        <div className="project-grid">
            {items.map(({ id, name, description }, index) => (
                <article className="project-card" key={id}>
                    <div className="project-media">
                        {images[index]?.media.type === "video" && (
                            <video className="project-video" controls>
                                <source src={images[index].media.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                        {images[index]?.media.type === "image" && (
                            <Image className="project-image" src={images[index].media.src} alt={`${name} screenshot`} />
                        )}
                        {images[index]?.media.type === "component" && images[index].media.node}
                    </div>
                    <div className="project-body">
                      <h3>{name}</h3>
                      <p className="project-description">{description}</p>
                      {(images[index]?.tech.length ?? 0) > 0 && (
                        <div className="project-content">
                          <p className="techstack-title">Techstack</p>
                          <ul className="project-tech">
                            {images[index].tech.map((techName) => {
                                const skill = skillsMap[techName];
                                return (
                                    <li className="skill-item" key={techName}>
                                        {skill?.logo && <Image src={skill.logo} className="skill-icon" alt={`${techName} logo`} />}
                                        {skill?.icon_logo}
                                        <span>{techName}</span>
                                    </li>
                                );
                            })}
                          </ul>
                        </div>
                      )}
                      <button type="button" className="project-link" onClick={() => setSelected(index)}>
                        View details <FaArrowRightLong/>
                      </button>
                    </div>
                </article>
            ))}
            {selected !== null && items[selected] && images[selected] && (
              <ProjectPopup
                name={items[selected].name}
                description={items[selected].description}
                media={images[selected].media}
                tech={images[selected].tech}
                onClose={closePopup}
              />
            )}
        </div>
    );
}