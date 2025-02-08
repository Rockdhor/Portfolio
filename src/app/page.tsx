import Image from "next/image";
import what2playimg from './assets/images/what2play.png'
import bankingimg from './assets/images/banking.png'
import { Contact } from "./Contact";


function Navbar() {
  const navItems = [
    { href: "#about", id: "nav-about", text: "About" },
    { href: "#projects", id: "nav-projects", text: "Projects" },
    { href: "#notes", id: "nav-notes", text: "Notes" },
    { href: "#contact", id: "nav-contact", text: "Contact me" },
  ];
  return(
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand nav-link" href="#" id="nav-hero"><span className="allen">allen</span> schmerler</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {
                navItems.map((item)=>(
                  
                    <li className="nav-item" key={item.id}>
                    <a className="nav-link" aria-current="page" href={item.href} id={item.id}>{item.text}</a>
                    </li>
                  
                ))
              }
            </ul>
          </div>
        </div>
    </nav>
  )
}

function Hero() {
  return (
    <div className="jumbotron jumbotron-fluid text-light screenfull d-flex align-items-center" id="hero">
        <div className="container">
          <h1>
            <span className="allen">allen</span> here.
          </h1>
          <h2 className="hero-subheader">
            i make stuff sometimes
          </h2>
          <h3 className="hero-subheader">
            check it out
          </h3>
          <a href="#about">
            <div id="down-arrow">
              <i className="bi bi-arrow-down mx-auto"></i>
            </div>
          </a>
        </div>
      </div>
  )
}

function About() {
  const skills = [
    "html5",
    "css3",
    "javascript",
    "bootstrap",
    "react",
    "nodejs",
    "webpack",
    "firebase",
    "github",
    "heroku",
    "jest",
    "linux",
    "c",
    "bash",
    "androidstudio"
]
  return (
    <div className="jumbotron jumbotron-fluid text-light screenfull d-flex align-items-center" id="about">
        <div className="container">
          <h1>about me</h1>
          <hr />
          <div className="row">
            <div className="col-12 col-md-6 text-justify fs-5" id="description">
              <h2>who am i?</h2>
              <p>my name&apos;s <span className="allen">allen</span>. but you knew this already, right?</p>
              <p>professionally speaking i&apos;m a <span className="allen">software developer</span> with (or at least pretty soon if you&apos;re reading this before the middle of may) a <span className="allen text-lowercase">B.S. in Computer Science</span>.</p>
              <p>i grew up consuming amazing pieces of software (looking at you <span className="allen">pokemon sapphire</span>) so nowadays i strive to put some of that out there too. so hey, pretty convenient that i also enjoy making things a lot.</p>
              <p>aside from the obvious stuff i really enjoy trying new things out and you can probably find me <span className="allen">drinking tea</span> and <span className="allen">consuming art</span> (<span id="art">that&apos;s just code for watching a movie, playing some game or meddling with some poetry</span>)</p>
            </div>
            <div className="col-12 col-md-6 ">
              <h2>toolbox</h2>
              <p className="fs-5">these are some of the skills and tools under my belt.</p>
              <div id="skills" className="d-flex flex-wrap justify-content-center">
                {/*<!-- Skills -->*/
                  skills.map((skill) => (
                    <div className="skillbox" key={skill}>
                      <i className={`devicon-${skill}-plain`}></i>
                      <p>{skill}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
  ) 
}

function Projects() {
  const projects = [
    { title: "SchBanking", description: "A web banking application that allows an user to open checking accounts, perform transactions, view their account history and much more.", img: bankingimg, git: "https://github.com/Rockdhor/SchBanking", live : true ? "" : "https://ass24-prod.herokuapp.com/" },
    { title: "what2play", description: "A tiny app that recommends a game to play based on your mood.", img: what2playimg, git: "https://github.com/Rockdhor/what2play", live : "https://whattoplay.vercel.app" },
    
  ];
  return (
    <div className="jumbotron jumbotron-fluid text-light mb-5" id="projects">
        <div className="container">
          <h1>projects</h1>
          <hr/>
          <h2 className="mb-4">here&apos;s some of my work</h2>
          <div className="accordion accordion-flush d-flex flex-wrap justify-content-center" id="projectscontainer">
            {/*<!-- Projects -->*/
              projects.map((project) => (
                <div className="card mb-5 text-light projectbox" key={project.title}>
                  <div className="row g-0 justify-content-around">
                    <div className="col-md-3 d-flex align-items-center">
                      <Image src={project.img} className="img-fluid card-img" alt="..."/>
                    </div> 
                    <div className="col-md-8 d-flex align-items-center">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <h5 className="card-title fs-1">{project.title}</h5>
                          </div>
                          <div className="col-1 d-flex align-items-center justify-content-center">
                            <a target="_blank" className="git-icon" href={project.git}>
                              <i className="devicon-github-plain"></i>
                            </a>
                          </div>
                        </div>
                        <p className="card-text">{project.description}</p>
                        <a className="project-link text-light" href={project.live} target="_blank" ><button type="button" className="btn btn-salmon text-light ">Try it out</button></a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
            
          <h2>if you&apos;re interested in anything else i invite you to contact me or check my github out</h2>
          </div>
          
        
      </div>
  )
}

function Notes() {
  return (
    <div className="jumbotron jumbotron-fluid text-light mb-5" id="notes">
        <div className="container">
          <h1>notes</h1>
          <hr/>
          <div id="notescontainer" className="d-flex flex-wrap justify-content-around">
            {/*<!-- Notes -->*/
            
            }
            <p>Normally, you&apos;d have a nice little section here with nice little post it notes. someone hates fun so this isn&apos;t a thing anymore. i&apos;m working on it!</p>
          </div>
        </div>

      </div>
  )
}



export default function Home() {
  return (
    <div className="">
      <Navbar/>
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

