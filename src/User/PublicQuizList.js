import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PublicQuizListItem from './PublicQuizListItem';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';

function PublicQuizList() {
  const [quizlist, setQuizlist] = useState([]);
  const [username, setUsername] = useState(localStorage.getItem('username'));

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + '/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then((data) => {
      let quizzes = []

      data.forEach(element => {
        quizzes.push(...element.quizzes);
      })

      setQuizlist(quizzes.map(element => {
        return {
          _id: element._id,
          title: element.title,
          description: element.description,
          createdBy: element.createdBy,
        }
      }));
    })
    .catch(console.log)
  }, []);

  return (
    <>
      <ListGroup className="mt-4">
        {quizlist.map((element) => {
          return(
            <PublicQuizListItem
              key={element._id}
              id={element._id}
              title={element.title}
              description={element.description}
              createdBy={element.createdBy}
            />
          );
        })}
      </ListGroup>
    </>
  );
}

export default PublicQuizList;
