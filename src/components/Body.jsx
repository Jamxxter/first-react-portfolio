import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



const Body = () => {
  return (
    <div>
    <section className='first-hero'>
    <div className='container mt-5 mb-5'>
      <Container fluid>
        <Row id='body-container'>
          <Col id='first-hero-textbox'>
          <div>
            <h1>Hi, I'm Aldrin Paniza</h1>
            <h3 class="mb-4">Front-end Developer</h3>
            <h4 class="mb-5">Welcome to my official Portfolio, A passionate Front-end Web Developer.</h4>
            <div id='first-hero-btn'>
             <a href='https://drive.google.com/file/d/1eLFscywqhw9cf4UWPmZRqmWApN_etSyW/view' target='_blank' id='first-hero-btn-1'><Button variant="primary">Download CV</Button></a>
             <a href='https://drive.google.com/file/d/1eLFscywqhw9cf4UWPmZRqmWApN_etSyW/view' target='_blank' id='first-hero-btn-2'><Button variant="primary">Contact Info</Button></a>
            </div>
          </div>
          </Col>
          <Col id='portfolio-img'>
          <div>
            <img className='img-fluid' src={ require('../assets/img/Jam.jpg')} alt="" id='jam-img' />
          </div>
          </Col>
        </Row>
      </Container>
    </div>
    </section>
    <section className='second-hero' id='second-hero'>
    <div className='container mt-5 mb-5'>
    <h1 className='mb-5' id='projects'>Projects</h1>
    <Container className='mb-5' fluid>
        <Row id='body-container'>
          <Col id='tuf-preview-col1'>
          <div>
            <a href='https://tuf-web-practice.vercel.app/' target='_blank'><img className='img-fluid' src={ require('../assets/img/tuf-preview.png')} alt="" id='tuf-preview-img'/></a>
          </div> 
          </Col>
          <Col className='d-flex' id='tuf-preview-col2'>
          <div>
            <div id='text-box'>
              <h3>TUF</h3>
              <p>A website from TUF that inspired me to create my first responsive project. It is a website that all about graphics card.</p>
            </div>
            <div className='d-flex mb-4' id='dom'>
              <div id='doms'>
                <img className='img-fluid' src={ require('../assets/img/html5-logo.png')} alt="" id=''/>
              </div>
              <div id='doms'>
                <img className='img-fluid' src={ require('../assets/img/css3-logo.png')} alt="" id=''/>
              </div>
              <div id='doms'>
                <img className='img-fluid' src={ require('../assets/img/JS-logo.png')} alt="" id=''/>
              </div>
              <div id='doms'>
                <img className='img-fluid' src={ require('../assets/img/bootstrap-logo.png')} alt="" id=''/>
              </div>
            </div>
            <div className='d-flex' id='live-demo-btn'>
              <div class="d-flex" id="code-button">
                <a href="https://github.com/Jamxxter/tuf-web" target="_blank">Code    <img className='img-fluid' src={ require('../assets/img/github.png')} alt="github-preview-logo" id='github-preview-logo'/></a>
              </div>
              <div class="d-flex" id="live-button">
                <a href="https://tuf-web-practice.vercel.app/" target="_blank">Live Demo    <img className='img-fluid' src={ require('../assets/img/live-demo.png')} alt="live-demo-logo" id='live-demo-logo'/></a>
              </div>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
      <Container id='fylo-section' fluid>
        <Row id='body-container'>
          <Col className='d-flex' id='tuf-preview-col2'>
          <div>
            <div id='text-box'>
              <h3>Fylo</h3>
              <p>A website from TUF that inspired me to create my first responsive project. It is a website that all about graphics card.</p>
            </div>
            <div className='d-flex mb-4' id='dom'>
              <div id='doms'>
                <img className='img-fluid' src={ require('../assets/img/html5-logo.png')} alt="" id=''/>
              </div>
              <div id='doms'>
                <img className='img-fluid' src={ require('../assets/img/css3-logo.png')} alt="" id=''/>
              </div>
              <div id='doms'>
                <img className='img-fluid' src={ require('../assets/img/JS-logo.png')} alt="" id=''/>
              </div>
              <div id='doms'>
                <img className='img-fluid' src={ require('../assets/img/bootstrap-logo.png')} alt="" id=''/>
              </div>
            </div>
            <div className='d-flex' id='live-demo-btn'>
              <div class="d-flex" id="code-button">
                <a href="https://github.com/Jamxxter/fylo-preview" target="_blank">Code    <img className='img-fluid' src={ require('../assets/img/github.png')} alt="github-preview-logo" id='github-preview-logo'/></a>
              </div>
              <div class="d-flex" id="live-button">
                <a href="https://fylo-preview.vercel.app/" target="_blank">Live Demo    <img className='img-fluid' src={ require('../assets/img/live-demo.png')} alt="live-demo-logo" id='live-demo-logo'/></a>
              </div>
            </div>
          </div>
          </Col>
          <Col id='tuf-preview-col1'>
          <div>
            <a href='https://fylo-preview.vercel.app/' target='_blank'><img className='img-fluid' src={ require('../assets/img/fylo-preview.png')} alt="" id='tuf-preview-img'/></a>
          </div> 
          </Col>
        </Row>
      </Container>
    </div>
    </section>
    </div>
  );
}

export default Body
