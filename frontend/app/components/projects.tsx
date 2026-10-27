"use client"
import { useCallback, useEffect,useState } from "react";
import Image from "next/image";
import washworld from '../img/washworld-startscreen.png'
import cphbookinq from '../img/cphbookinq.png'
import boxboxclub from '../img/boxboxclub-startscreen.png'
import { skills } from "./techstack";
import ProjectPopup from "./project-popup";
import { FaArrowRightLong } from "react-icons/fa6";
import { filterProjectsByTech } from "./tech-project-filter";


interface PortfolioItem {
  id: number;
  name: string;
  description:string;
  img:string;
}

const images=[
  {img:washworld, video:"/video/washworld.mp4" as string | undefined, tech:["Docker","Figma","Git","MariaDB","Python","React","TypeScript",,] as string[]},
  {img:boxboxclub, video:undefined as string | undefined, tech:["Git","JavaScript","React Native", "Supabase", ] as string[]},
  {img:cphbookinq, video:undefined as string | undefined, tech:["Git","React", "Vite","TypeScript","Supabase", ] as string[]}
]

export const projectTech = Array.from(new Set(images.flatMap((p) => p.tech)));

export default function Projects({ selectedTech = [] }: { selectedTech?: string[] }){
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); 
  const [selected, setSelected] = useState<number | null>(null);
  const closePopup = useCallback(() => setSelected(null), []);

   useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:80"}/items`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }

        const data: PortfolioItem[] = await response.json();
        setItems(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const visible = filterProjectsByTech(
    items.map((item, index) => ({ ...item, index, tech: images[index]?.tech ?? [] })),
    selectedTech,
  );

    return(
        <div >
            {visible.length === 0 && <p>No projects match the selected techstack.</p>}
            {visible.map(({ id, name, description, index }) => (
                <div className="skill-item" key={id}>
                    {images[index] && (
                        <Image className="skill-icon" src={images[index].img} alt={`${name} screenshot`} />
                    )}
                    <div className="container_1-1">
                      <h3>{name}</h3>
                      <button type="button" className="project-link" onClick={() => setSelected(index)}>
                        View details <FaArrowRightLong/>
                      </button>
                    </div>
                    <p className="description">{description}</p>
                   
                    {(images[index]?.tech.length ?? 0) > 0 && (
                      <div className="project-content">
                          <p className="techstack-title">Techstack</p>
                        <ul className="project-tech">
                            {images[index].tech.map((techName) => {
                                const skill = skills.find((s) => s.name === techName);
                                return (
                                    <li key={techName}>
                                        {skill && <Image src={skill.logo} alt={`${techName} logo`} />}
                                        <span>{techName}</span>
                                    </li>
                                );
                            })}
                        </ul>
                        </div>
                    )}
                </div>
            ))}
            {selected !== null && items[selected] && (
              <ProjectPopup
                name={items[selected].name}
                description={items[selected].description}
                img={images[selected]?.img}
                video={images[selected]?.video}
                tech={images[selected]?.tech ?? []}
                onClose={closePopup}
              />
            )}
        </div>
    );
}