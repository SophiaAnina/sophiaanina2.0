import Image from "next/image";
import Techstack from "./components/techstack";
import logo from './portfoliobillede.jpg'; 
import Skills from "./components/skills";
import Projects from "./components/projects";
import WorkExperience from "./components/work-experience";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {

  return (
    <div className="container"> 
     <Nav/>
      <main>
       
        <div className="intro">
        <Image src={logo} alt="Portrait of Sophia" />
          <div className="text-container">
           
            <p className="subtitle">HELLO, I'M</p>
            <h1>Sophia Anina Kingston</h1>
            <h2>Fullstack developer Hyperfocused</h2>
            <h2>On <Skills/></h2>
            <p>I’m a Web engineer student with a strong interest in building modern, user-friendly, and scalable digital solutions. I enjoy working across both <span className="frontend">frontend</span> and <span className="software">backend</span> especially <span className="frontend">app-development</span> and have experience with <span className="software">Python, Node</span>,  <span className="frontend">JavaScript, React and React Native</span>, as well as <span className="tooling">Docker</span>. With a background in multimedia design I also work with Figma and <span className="ux">UX</span> principles, allowing me to combine technical development with thoughtful, user-centered design.</p>
            <div className="button-container">
            <a className="download-button" href="/sophia-anina-cv.pdf" download="sophia-anina-cv.pdf"><MdOutlineFileDownload/> Download CV</a>
            <a className="projects-button" href="#Projects">View my work <FaArrowRightLong/> </a>
            </div>
           
          </div>
          
        </div>
        <div className="container_2-1">
        
          <Techstack/>
         
          <WorkExperience/>
        
        </div>
        <div id="Projects">
          <p className="subtitle">Projects</p>
          <h3>Things i built</h3>
          <Projects/>
        </div>
       
      </main>
     <Footer/>
    </div>
  );
}
