import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Body = () => {
  return (
    <div className='container mt-5 mb-5'>
      <Container fluid>
        <Row id='body-container'>
          <Col id='first-section-textbox'>
          <div>
            <h1>Hi, I'm Aldrin Paniza</h1>
            <h3 class="mb-4">Front-end Developer</h3>
            <h4>Welcome to my official Portfolio, A passionate Front-end Web Developer.</h4>
          </div>
          </Col>
          <Col id='portfolio-img'>
          <div>
            <img src={ require('../assets/img/Jam.jpg')} alt="" id='jam-img' />
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Body
