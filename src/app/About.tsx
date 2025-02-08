export function About() {
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
  ];
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
              {/*<!-- Skills -->*/skills.map((skill) => (
                <div className="skillbox" key={skill}>
                  <i className={`devicon-${skill}-plain`}></i>
                  <p>{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
