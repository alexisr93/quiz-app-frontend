import React from 'react';
import ProblemNav from './ProblemNav';
import Problem from './Problem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function MainBodyQA() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center" style={{height: '500px'}}>
        <Problem/>
      </Row>
      <Row className="justify-content-center mt-5">
        <ProblemNav/>
      </Row>
    </Container>
  );
}

export default MainBodyQA;
