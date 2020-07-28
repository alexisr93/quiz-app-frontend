import React from 'react';
import Question from './Question';
import Answers from './Answers';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Problem() {
  return (
    <div>
      <Row>
        <Col>
          <Question/>
        </Col>
        <Col>
          <Answers/>
        </Col>
      </Row>
    </div>
  );
}

export default Problem;
