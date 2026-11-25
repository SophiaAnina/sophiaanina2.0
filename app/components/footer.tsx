
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { IoMdMail } from "react-icons/io";

export default function Footer(){

    return(
       <footer>
             <div className="icon-container">
              <a href="https://github.com/SophiaAnina"><SiGithub/></a>
              <a href="https://www.linkedin.com/in/sophia-kingston-8b4494203/"><FaLinkedin/></a>
              <a href="mailto:sophia.anina@gmail.com"><IoMdMail/></a>
            </div>
        </footer>
    );
}