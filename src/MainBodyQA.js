import React from 'react';
import ProblemNav from './ProblemNav';
import Problem from './Problem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function MainBodyQA() {
  return (
    <Container>
      <Row>
        <Problem/>
      </Row>
      <Row>
        <ProblemNav/>
      </Row>
    </Container>
  );
}

export default MainBodyQA;
