import { Contact } from "./Contact";
import { MainNavbar } from "./MainNavbar";
import { Hero } from "./Hero";
import { About } from "./About";
import { Projects } from "./Projects";
import { Notes } from "./Notes";


export default function Home() {
  return (
    <div className="">
      <MainNavbar/>
      <Hero/>
      <hr className="divisor"/>
      <About/>
      <hr className="divisor"/>
      <hr className="divisor"/>
      <Projects/>
      <Notes/>
      <Contact/>
    </div>
  );
  
}

