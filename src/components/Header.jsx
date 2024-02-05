import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
  const NavLink = document.getElementById('nav-links');
  const closeLink = () => {
    document.getElementById('basic-navbar-nav').classList.remove('show');
  };
  return (
    <div id='nav-bar-body'>
      <Navbar expand="lg" className="bg-body-tertiary" id="navbar">
      <Container>
        <Navbar.Brand href="#" id="aldrin-btn-logo">Aldrin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="nav-links">
            <div id="github-btn">
              <Nav.Link  href="https://github.com/Jamxxter" target='_blank' onClick={closeLink}><img src={ require('../assets/img/github.png' )} alt="github-logo" id="github-logo" />Github</Nav.Link>
            </div>
            <div id="project-btn">
              <Nav.Link href="#second-hero" onClick={closeLink}><img src={ require('../assets/img/project.png')} alt="project-logo" id="project-logo"/>Projects</Nav.Link>
            </div>
            <div id="tech-stack-btn">
              <Nav.Link href="#tech-stack" onClick={closeLink}><img src={ require('../assets/img/tech-stack.png')} alt="tech-stack-logo" id="tech-stack-logo"/>Tech Stack</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
    </div>
  )
}





export default NavBar
