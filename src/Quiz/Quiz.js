import React, { useState, useEffect } from 'react';
import ProblemNav from './ProblemNav';
import Problem from './Problem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Submit from './Submit';

function Quiz(props) {
  const [quizData, setQuizData] = useState({
    'quizId': props.location.state.id,
    'quizTitle': '',
    'quizDescription': '',
    'quizQuestions': []
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  //const [questionList, setQuestionList] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [optionSelectedList, setOptionSelectedList] = useState([]);

  const handleSelected = (option) => {
    setOptionSelectedList(optionSelectedList.map((element, index) => {
      if (index == currentQuestion) {
        return option;
      }
      return element;
    }));
  }

  const createQuestionList = () => {
    let value = 0;

  }

  const handleDropdownChange = (value) => {
    console.log(value);
    if (value == -2) {
      setCurrentQuestion(totalQuestions - 1);
    }
    else if (value == "Submit") {
      setCurrentQuestion(-1);
    }
    else {
      setCurrentQuestion(value - 1);
    }
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
    setTotalQuestions(quizData.quizQuestions.length)
    setOptionSelectedList(Array(quizData.quizQuestions.length).fill('1'));
  }, [quizData.quizQuestions]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + '/quiz/' + props.location.state.username + '/' + quizData.quizId, {
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
  let value = 0;

  if (currentQuestion == -1) {
    return (
      <Container className="mt-5">
        <Submit
          quizId={quizData.quizId}
          quizTitle={quizData.quizTitle}
          optionsSelected={optionSelectedList}
          dropdownChange={handleDropdownChange}
          username={props.location.state.username}
        />
      </Container>
    )
  } else {
      return (
        <Container className="mt-5">
          <Row className="justify-content-center" style={{height: '500px'}}>
            {quizData.quizQuestions.map((element)=> {
              value += 1;
              return(
                <Problem
                  setSelected={handleSelected}
                  selected={optionSelectedList[currentQuestion]}
                  number={value}
                  questionData={element}/>
              );
            })[currentQuestion]}
          </Row>
          <Row className="justify-content-center mt-5">
            <ProblemNav
              dropdownChange={handleDropdownChange}
              numQuestions={totalQuestions}
              currentQuestion={currentQuestion + 1}
              clickPrevious={handleClickPrevious}
              clickNext={handleClickNext}/>
          </Row>
        </Container>
    )
  };
}

export default Quiz;
