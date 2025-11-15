import Certificate from "../Certificate";
import Contact from "../contact";
import Education from "../education";
import Experience from "../experience";
import GitStats from "../github";
import Skills from "../skills";
import About from "./about";
import Work from "./work";
export default function Home(){
    return(
        <>
        <About></About>
        <Work></Work>
        <Experience></Experience>
        <GitStats></GitStats>
        <Skills></Skills>
        <Education></Education>
        <Contact></Contact>
    
        </>
    )
}