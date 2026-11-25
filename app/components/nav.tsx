import { HiChevronLeft, HiChevronRight} from "react-icons/hi2";
import DarkModeToggle from "./dark-mode-toggle";
import Link from "next/link";
import App from "next/app";
export default function Nav (){
    
    return(
         <nav>
            
           <a href="#">
            <HiChevronLeft className="icon"/>SophiaAnina/<HiChevronRight className="icon"/>
            </a>
            <DarkModeToggle/>
        </nav>
    );
}