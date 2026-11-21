import figma from "../img/Figma.svg.webp"
import git from "../img/Git_Icon.svg.webp"
import mongodb from "../img/Mongodb-icon.svg.webp"
import nestjs from "../img/NestJS.svg.webp"
import postgres from '../img/Postgresql_elephant.svg.webp'
import python from '../img/Python-logo-notext.svg.webp'
import react from '../img/React-icon.svg.webp'
import next from '../img/Tabler-icons_brand-nextjs.svg.webp'
import neo4j from '../img/neo4j.jpg'
import { SiAstro } from "react-icons/si"
import { SiScratch } from "react-icons/si"
import { SiNeo4J } from "react-icons/si"
import tailwind from '../img/Tailwind_CSS_Logo.svg.webp'
import typescript from '../img/Typescript_logo_2020.svg.webp'
import javascript from '../img/Unofficial_JavaScript_logo_2.svg.webp'
import mariadb from '../img/MariaDB_colour_logo.svg.webp'
import docker from '../img/docker.png'
import php from '../img/php.png'
import supabase from '../img/supabase-logo-icon.png'
import vite from '../img/Vite_Logo_2026.svg.webp'
import wordpress from '../img/wordpress.png'
import { FaDocker } from "react-icons/fa6"
import Image from "next/image"

export const skills = [
    { name: "React", logo: react },
    { name: "Next.js", logo: next },
    { name: "TypeScript", logo: typescript },
    { name: "JavaScript", logo: javascript },
    { name: "MongoDB", logo: mongodb },
    { name: "NestJS", logo: nestjs },
    {name: "Astro", icon_logo: <SiAstro/> },
    { name: "React Native", logo: react },
    { name: "PostgreSQL", logo: postgres },
    { name: "Python", logo: python },
    {name: "PHP", logo:php},
    {name: "Neo4j", icon_logo:<SiNeo4J size={36}/>},
    { name: "Tailwind CSS", logo: tailwind },
    { name: "Figma", logo: figma },
    { name: "Git", logo: git },
    { name: "MariaDB", logo:mariadb},
    { name: "Docker", icon_logo:<FaDocker size={36} />},
    { name: "Supabase", logo:supabase},
    { name: "Vite", logo:vite},
    {name: "Wordpress", logo:wordpress},
    {name: "Scratch", icon_logo:<SiScratch size={36}/>}


]

export default function Techstack() {
    return (
        <div className="techstack">
        <p className="subtitle">TECHSTACK</p>
          <h3>Tools I work with</h3>
        <ul className="icon-skill-container">
            {skills.map(({ name, logo, icon_logo }) => (
                <li className="skill-item" key={name}>
                    {logo && <Image className="skill-icon" src={logo} alt={`${name} logo`}   />}
                    {icon_logo && <span className="skill-icon">{icon_logo}</span>}
                    <span>{name}</span>
                </li>
            ))}
        </ul>
        </div>
    )
}