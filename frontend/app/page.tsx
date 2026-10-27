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
            <p>I am a Web-development student based in Copenhagen with hands-on experience in modern development environments, fullstack development, and relational, document, and graph databases. With a former background in multimediadesign, I am focused on creating visually appealing and user-friendly digital experiences. Especially focused on User Experiennce, adapting and developing to the demographic.</p>
            <div className="button-container">
            <a className="download-button" href="/sophia-anina-cv.pdf" download="sophia-anina-cv.pdf"><MdOutlineFileDownload/> Download CV</a>
            <a className="projects-button" href="#Projects">View my work <FaArrowRightLong/> </a>
            </div>
           
          </div>
          
        </div>
        <div className="container_1-1">
        <div className="techstack">
          <p className="subtitle">TECHSTACK</p>
          <h3>Tools I work with</h3>
          <Techstack/>
         </div> 
         <div id="Timeline">
          <WorkExperience/>
        </div>
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
