import React from 'react';
import Question from './Question';
import Answer from './Answer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Problem() {
  return (
    <div>
      <Row style={{height: '100%'}}>
        <Col md={6} lg={6} className="d-flex align-content-stretch align-items-stretch">
          <Question/>
        </Col>
        <Col md={6} lg={6} className="d-flex align-content-space-between flex-wrap">
          <Answer/>
          <Answer/>
          <Answer/>
          <Answer/>
        </Col>
      </Row>
    </div>
  );
}

export default Problem;
