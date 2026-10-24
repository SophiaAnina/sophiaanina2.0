import { HiChevronLeft, HiChevronRight} from "react-icons/hi2";
import DarkModeToggle from "./dark-mode-toggle";
export default function Nav (){
    
    return(
         <nav>
            <p>
            <HiChevronLeft className="icon"/>SophiaAnina/<HiChevronRight className="icon"/>
            </p>
            <DarkModeToggle/>
        </nav>
    );
}