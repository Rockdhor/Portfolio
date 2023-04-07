const project = (title, description, img, git, live) => {
    return {
        title, title,
        description, description,
        img: img,
        git, git,
        live, live
    }
}

function populateSkills(skills) {
    let skillsDiv = document.getElementById("skills");

skills.map(i => {
    let container = document.createElement("div");
    container.classList.add("skillbox");
    container.innerHTML = '<i class="devicon-'+i+'-plain"></i><p>'+i+'</p>'
    return container;
}).forEach((skill) => {
    skillsDiv.appendChild(skill)
})
}

function populateProjects(projects) {
    let projectsDiv = document.getElementById("projectscontainer");
    
    projects.map(i => {
        let card = document.createElement("div");
        ["card", "mb-5", "text-light", "projectbox"].forEach(c => {
            card.classList.add(c);
        });
        
        card.innerHTML = 
        '<div class="row g-0 justify-content-around"> ' +
        '<div class="col-md-3 d-flex align-items-center"> ' +
          '<img src="'+i.img+'" class="img-fluid card-img" alt="..."> ' +
        '</div> ' +
        '<div class="col-md-8 d-flex align-items-center">' +
          '<div class="card-body">' +
            '<div class="row">' +
                '<div class="col"><h5 class="card-title fs-1">'+i.title+'</h5></div>' +
                '<div class="col-1 d-flex align-items-center justify-content-center"><a target="_blank" class="git-icon" href="'+i.git+'"><i class="devicon-github-plain"></i></a></div>' +
            '</div>' +
            '<p class="card-text">'+i.description+'</p>' +
            '<a class="project-link text-light" href="'+i.live+'" target="_blank" ><button type="button" class="btn btn-salmon text-light ">Try it out</button></a>' +
            
          '</div>' +
        '</div>' +
      '</div>'
      return card
    }).forEach((project) => {
        projectsDiv.appendChild(project)
    })

}

function populateNotes() {
    let notesDiv = document.getElementById("notescontainer");
    let req = new XMLHttpRequest();
    req.open('GET', "https://notesapi.rockdhor.repl.co/latest/3");
    req.send();
    req.onload = () => {
        if (req.status == 200) {
            data = JSON.parse(req.response)
            data.map(note => {
                let container = document.createElement("div");
            ["card", "text-light", "notebox",  "col-12", "col-md-3", "mb-3", "dark-border-subtle"].forEach(c => {
                container.classList.add(c);
            });
            container.innerHTML = `<div class="card-body"> `+
            `<h5 class="card-title">`+note["title"]+`</h5>` +
            `<hr/>` +
            `<p class="card-text">`+note["content"]+`</p>`+
            `<h6 class="card-subtitle mb-2">`+note["created-at"]+`</h6>`+
            `</div>`
            return container
            }).forEach((container) => {
                notesDiv.appendChild(container);
            })
        }
    }
}

function setToast() {
    let email = document.getElementById("e-mail");
    email.addEventListener("click", () => {
        console.log("clik")
        navigator.clipboard.writeText(email.innerText.replace(" at ", "@").replace(" dot ", ".")).then(() => {
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
        })
    })
}

function setFooter() {
    document.getElementById("footer").innerText = "© allen schmerler - " + new Date().getFullYear();
}

function setScroll() {
    //code snatched from https://dev.to/areeburrub/change-nav-link-s-style-as-you-scroll-4p62
    window.onscroll = () => {
        let current = "";
        let sections = Array.from(document.getElementsByClassName("jumbotron"))
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          if (scrollY >= sectionTop ) {
            current = section.getAttribute("id"); }
        });
      
        Array.from(document.getElementsByClassName("nav-link")).forEach((li) => {
          li.classList.remove("active");
          if (li.id == ("nav-"+current)) {
            li.classList.add("active");
          }
        });
      };
}

function setNavbar() {
    let links = Array.from(document.getElementsByClassName("nav-link"))
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            Array.from(document.getElementsByClassName("nav-link")).forEach((l) => l.classList.remove("active"))
            e.target.classList.add("active")
        })
    })
}

skills = 
["html5",
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
"androidstudio"]
populateSkills(skills)

projects = [
    project("NotesAPI", 
    "A simple API for... notes. Like tiny blog posts, just a title, some text and a timestamp. You can see it in action on the notes section of this website! ", 
    "public/notesapi.png", 
    "https://github.com/Rockdhor/NotesAPI", 
    "https://notesapi.rockdhor.repl.co/")
,
    project("shortyURL", 
    "A basic URL shortener. Provide it with an URL and check if your desired shortened ID is available and you'll have your own https://shortyURL.rockdhor.repl.co/api/shorturl/ link! That's actually kind of long... but it's the thought that counts?", 
    "public/shortyURL.png", 
    "https://github.com/Rockdhor/shortyURL", 
    "https://shortyURL.rockdhor.repl.co")
]
populateProjects(projects)

populateNotes()

setToast()

setFooter()

setScroll()

setNavbar()