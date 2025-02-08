import Image from "next/image";
import what2playimg from './assets/images/what2play.png';
import bankingimg from './assets/images/banking.png';

export function Projects() {
  const projects = [
    { title: "SchBanking", description: "A web banking application that allows an user to open checking accounts, perform transactions, view their account history and much more.", img: bankingimg, git: "https://github.com/Rockdhor/SchBanking", live: true ? "" : "https://ass24-prod.herokuapp.com/" },
    { title: "what2play", description: "A tiny app that recommends a game to play based on your mood.", img: what2playimg, git: "https://github.com/Rockdhor/what2play", live: "https://whattoplay.vercel.app" },
  ];
  return (
    <div className="jumbotron jumbotron-fluid text-light mb-5" id="projects">
      <div className="container">
        <h1>projects</h1>
        <hr />
        <h2 className="mb-4">here&apos;s some of my work</h2>
        <div className="accordion accordion-flush d-flex flex-wrap justify-content-center" id="projectscontainer">
          {/*<!-- Projects -->*/projects.map((project) => (
            <div className="card mb-5 text-light projectbox" key={project.title}>
              <div className="row g-0 justify-content-around">
                <div className="col-md-3 d-flex align-items-center">
                  <Image src={project.img} className="img-fluid card-img" alt="..." />
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
                    <a className="project-link text-light" href={project.live} target="_blank"><button type="button" className="btn btn-salmon text-light ">Try it out</button></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2>if you&apos;re interested in anything else i invite you to contact me or check my github out</h2>
      </div>


    </div>
  );
}
