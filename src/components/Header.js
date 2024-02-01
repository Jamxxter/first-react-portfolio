import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
  return (
    <div id='nav-bar-body'>
      <Navbar expand="lg" className="bg-body-tertiary" id="navbar">
      <Container>
        <Navbar.Brand href="https://github.com/Jamxxter" id="aldrin-btn-logo"  target='_blank'>Aldrin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="nav-links">
            <div id="github-btn">
              <Nav.Link href="#home"><img src={ require('../assets/img/github.png')} alt="" id="github-logo"/>Github</Nav.Link>
            </div>
            <div id="project-btn">
              <Nav.Link href="#link"><img src={ require('../assets/img/project.png')} alt="" id="project-logo"/>Projects</Nav.Link>
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
