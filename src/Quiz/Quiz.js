import React, { useState, useEffect } from 'react';
import ProblemNav from './ProblemNav';
import Problem from './Problem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const url = 'http://localhost:4000'

function Quiz(props) {
  const [quizData, setData] = useState({
    'quizId': props.location.state.id,
    'quizTitle': '',
    'quizDescription': '',
    'quizQuestions': []
  });

  useEffect(() => {
    fetch(url + '/quiz/' + localStorage.getItem('username') + '/' + quizData.quizId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      setQuizData({
        ...quizData,
        'quizTitle': data.title,
        'quizDescription': data.description,
        'quizQuestions': data.questions,
      });
    })
   .catch(console.log)
 }, [quizData.quizId]);

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

export default Quiz;
