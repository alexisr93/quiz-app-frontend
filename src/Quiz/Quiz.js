import React, { useState, useEffect } from 'react';
import ProblemNav from './ProblemNav';
import Problem from './Problem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const url = 'http://localhost:4000'

function Quiz(props) {
  const [quizData, setQuizData] = useState({
    'quizId': props.location.state.id,
    'quizTitle': '',
    'quizDescription': '',
    'quizQuestions': []
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionList, setQuestionList] = useState([]);

  const createQuestionList = () => {
    let value = 0;
    setQuestionList(quizData.quizQuestions.map((element)=> {
      value += 1;
      return(
        <Problem number={value} questionData={element}/>
      );
    }));
  }

  const handleClickNext = () => {
    if (currentQuestion < quizData.quizQuestions.length - 1){
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  const handleClickPrevious = () => {
    if (currentQuestion >= 1){
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  useEffect(() => {
    createQuestionList();
  }, [quizData.quizQuestions]);

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
        {questionList[currentQuestion]}
      </Row>
      <Row className="justify-content-center mt-5">
        <ProblemNav  clickPrevious={handleClickPrevious} clickNext={handleClickNext}/>
      </Row>
    </Container>
  );
}

export default Quiz;
