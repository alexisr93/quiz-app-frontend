import React from 'react';
import Question from './Question';
import AnswerOption from './AnswerOption';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Problem(props) {
  const handleSelected = (name) => {
    props.setSelected(name, props.number - 1);
  }
  return (
    <div style={{width: '100%'}}>
      <Row style={{height: '100%'}}>
        <Col md={6} lg={6} className="d-flex align-content-stretch align-items-stretch">
          <Question number={props.number} question={props.questionData.question}/>
        </Col>
        <Col md={6} lg={6} className="d-flex align-content-space-between flex-wrap">
          <AnswerOption
            name='option1'
            optionSelected={props.selected}
            clickButton={handleSelected}
            option={props.questionData.option1}/>
          <AnswerOption
            name='option2'
            optionSelected={props.selected}
            clickButton={handleSelected}
            option={props.questionData.option2}/>
          <AnswerOption
            name='option3'
            optionSelected={props.selected}
            clickButton={handleSelected}
            option={props.questionData.option3}/>
          <AnswerOption
            name='option4'
            optionSelected={props.selected}
            clickButton={handleSelected}
            option={props.questionData.option4}/>
        </Col>
      </Row>
    </div>
  );
}

export default Problem;
