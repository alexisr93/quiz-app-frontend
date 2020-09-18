import React, {useState, useEffect} from 'react';
import ResultListItem from './ResultListItem';
import FormGroup from 'react-bootstrap/FormGroup';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

function Results() {
  const [resultList, setResultList] = useState([]);
  const [username, setUsername] = useState(localStorage.getItem('username'));

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + '/results/' + username, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then((data) => {
      setResultList(data.map(element => {
        return ({
          quizTitle: element.quizTitle,
          quizScore: element.quizScore,
          dateQuizTaken: element.dateQuizTaken
        });
      }));
    })
    .catch(console.log)
  }, []);

  return (
    <Container className="mt-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Quiz Name</th>
            <th>Score</th>
            <th>Date Taken</th>
          </tr>
        </thead>
        <tbody>
          {resultList.map((element) => {
            return (
              <ResultListItem
                quizTitle={element.quizTitle}
                quizScore={element.quizScore}
                dateQuizTaken={element.dateQuizTaken}
              />
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Results
