import React from 'react';
import Question from './Question';
import AnswerOption from './AnswerOption';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Problem(props) {
  return (
    <div style={{width: '100%'}}>
      <Row style={{height: '100%'}}>
        <Col md={6} lg={6} className="d-flex align-content-stretch align-items-stretch">
          <Question number={props.number} question={props.questionData.question}/>
        </Col>
        <Col md={6} lg={6} className="d-flex align-content-space-between flex-wrap">
          <AnswerOption option={props.questionData.option1}/>
          <AnswerOption option={props.questionData.option1}/>
          <AnswerOption option={props.questionData.option1}/>
          <AnswerOption option={props.questionData.option1}/>
        </Col>
      </Row>
    </div>
  );
}

export default Problem;
