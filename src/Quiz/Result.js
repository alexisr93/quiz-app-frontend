import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function Result(props) {
  const [score, setScore] = useState('');
  const [date, setDate] = useState('');
  const [quizTitle, setQuizTitle] = useState(props.location.state.quizTitle);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [userAnswers, setUserAnswers] = useState(JSON.parse(localStorage.getItem('userAnswers')));

  useEffect(() => {
    let totalCorrect = 0;
    userAnswers.forEach((element, index) => {
      if (element == correctAnswers[index]) {
        totalCorrect += 1;
      }
    })

    let newScore = (totalCorrect/correctAnswers.length * 100).toFixed(1) + "%"

    setScore(newScore);

    fetch(process.env.REACT_APP_API_URL + '/results/' + localStorage.getItem('username'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'quizTitle': quizTitle,
        'dateQuizTaken': date,
        'quizScore': newScore,
      })
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data);
    })
   .catch(console.log)
  }, [correctAnswers]);

  useEffect(() => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    let todaysDate = mm + '/' + dd + '/' + yyyy;

    setDate(todaysDate);

    fetch(process.env.REACT_APP_API_URL + '/quiz/' + localStorage.getItem('username') + '/' + props.location.state.quizId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then((data) => {
      setCorrectAnswers(data.questions.map((element) => {
        return element.correctAnswer;
      }));
    })
   .catch(console.log)
  }, []);

  return (
    <Container className="mt-5">
      <Card className='text-left' style={{width: '100%', height: '500px'}}>
        <Card.Body style={{width: '100%', height: '100%'}}>
          <Card.Title></Card.Title>
          <Card.Text>
            <h4 style={{fontWeight: 'normal'}}>Your Score:</h4>
            <h1>{score}</h1>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Result;
