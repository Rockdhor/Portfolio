'use client'
import { Container, Nav, Navbar } from 'react-bootstrap';

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
}

