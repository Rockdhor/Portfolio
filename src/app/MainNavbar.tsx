'use client'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

export function MainNavbar() {
  const navItems = [
    { href: "#about", id: "nav-about", text: "About" },
    { href: "#projects", id: "nav-projects", text: "Projects" },
    { href: "#notes", id: "nav-notes", text: "Notes" },
    { href: "#contact", id: "nav-contact", text: "Contact me" },
  ];
  return (
    <div>
      <Navbar expand="lg" fixed="top" className="navbar bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#" id="nav-hero"><span className="allen">allen</span> schmerler</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {navItems.map((item) => (
            <Nav.Link key={item.id} href={item.href} id={item.id}>{item.text}</Nav.Link>

          ))}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
  {
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand nav-link" href="#" id="nav-hero"><span className="allen">allen</span> schmerler</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navItems.map((item) => (

              <li className="nav-item" key={item.id}>
                <a className="nav-link" aria-current="page" href={item.href} id={item.id}>{item.text}</a>
              </li>

            ))}
          </ul>
        </div>
      </div>
    </nav>
  }
}

