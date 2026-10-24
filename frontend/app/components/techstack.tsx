import figma from "../img/Figma.svg.webp"
import git from "../img/Git_Icon.svg.webp"
import mongodb from "../img/Mongodb-icon.svg.webp"
import nestjs from "../img/NestJS.svg.webp"
import postgres from '../img/Postgresql_elephant.svg.webp'
import python from '../img/Python-logo-notext.svg.webp'
import react from '../img/React-icon.svg.webp'
import next from '../img/Tabler-icons_brand-nextjs.svg.webp'
import tailwind from '../img/Tailwind_CSS_Logo.svg.webp'
import typescript from '../img/Typescript_logo_2020.svg.webp'
import javascript from '../img/Unofficial_JavaScript_logo_2.svg.webp'
import mariadb from '../img/MariaDB_colour_logo.svg.webp'
import docker from '../img/docker.png'
import supabase from '../img/supabase-logo-icon.png'
import vite from '../img/Vite_Logo_2026.svg.webp'
import Image from "next/image"
export const skills = [
    { name: "React/ -Native", logo: react },
    { name: "Next.js", logo: next },
    { name: "TypeScript", logo: typescript },
    { name: "JavaScript", logo: javascript },
    { name: "MongoDB", logo: mongodb },
    { name: "NestJS", logo: nestjs },
    { name: "PostgreSQL", logo: postgres },
    { name: "Python", logo: python },
    { name: "Tailwind CSS", logo: tailwind },
    { name: "Figma", logo: figma },
    { name: "Git", logo: git },
    { name: "MariaDB", logo:mariadb},
    { name: "Docker", logo:docker},
    { name: "Supabase", logo:supabase},
    { name: "Vite", logo:vite}

]

export default function Techstack() {
    return (
        <ul className="icon-skill-container">
            {skills.map(({ name, logo }) => (
                <li className="skill-item" key={name}>
                    <Image className="skill-icon" src={logo} alt={`${name} logo`} />
                    <span>{name}</span>
                </li>
            ))}
        </ul>
    )
}