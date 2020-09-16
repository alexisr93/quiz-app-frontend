import React, {useState, useEffect} from 'react';
import ResultListItem from './ResultListItem';
import FormGroup from 'react-bootstrap/FormGroup';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

function Results() {
  const [resultList, setResultList] = useState([]);
  const [username, setUsername] = useState(localStorage.getItem('username'));

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + '/quizzes/' + username, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then((data) => {
      setResultList(data.map(element => {
        return ({
          _id: element._id,
          title: element.title,
          description: element.description
        });
      }));
    })
    .catch(console.log)
  }, []);

  return (
    <>
      <ListGroup className="mt-4">
        {resultList.map((element) => {
          return (
            <ResultListItem
              key={element._id}
              quizName={element.title}
              quizScore={element.title}
              dateQuizTaken={element.description}
            />
          );
        })}
      </ListGroup>
    </>
  );
}

export default Results
