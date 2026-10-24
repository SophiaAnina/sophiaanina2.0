"use client"
import { useCallback, useEffect,useState } from "react";
import Image from "next/image";
import washworld from '../img/washworld-startscreen.png'
import cphbookinq from '../img/cphbookinq.png'
import boxboxclub from '../img/boxboxclub-startscreen.png'
import { skills } from "./techstack";
import ProjectPopup from "./project-popup";
import { FaArrowRightLong } from "react-icons/fa6";
interface PortfolioItem {
  id: number;
  name: string;
  description:string;
  img:string;
}

export default function Projects(){
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); 
  const [selected, setSelected] = useState<number | null>(null);
  const closePopup = useCallback(() => setSelected(null), []);


    
    const images=[
      {img:washworld, tech:["Python","React/ -Native","TypeScript","MariaDB","Git","Figma"]},
      {img:cphbookinq, tech:["React/ -Native", "Vite","Typescript","Supabase", "Git"] as string[]},
      {img:boxboxclub, tech:["React/ -Native","Javascript", "Supabase","Git" ] as string[]}
    ]  
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

    return(
        <div>
            {items.map(({ id, name, description }, index) => (
                <div className="skill-item" key={id}>
                    {images[index] && (
                        <Image className="skill-icon" src={images[index].img} alt={`${name} screenshot`} />
                    )}
                    <h3>{name}</h3>
                    <p>{description}</p>
                  
                    {(images[index]?.tech.length ?? 0) > 0 && (
                      <div className="project-content">
                          <button type="button" className="project-link" onClick={() => setSelected(index)}>
                      View details <FaArrowRightLong/>
                    </button>
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
                tech={images[selected]?.tech ?? []}
                onClose={closePopup}
              />
            )}
        </div>
    );
}