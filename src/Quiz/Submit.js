import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

function Submit(props) {
  const history = useHistory();

  const handleSubmit = () => {
    history.push({
      pathname: '/user/takequiz/result',
      state: {quizId: props.quizId}
    });
  };

  const handleClickGoBack = () => {
    props.dropdownChange(-2);
  };

  useEffect(() => {
    localStorage.setItem('userAnswers', JSON.stringify(props.optionsSelected));
  });

  return (
    <Card className='text-left' style={{width: '100%', height: '500px'}}>
      <Card.Body style={{width: '100%', height: '100%'}}>
        <Card.Title></Card.Title>
        <Card.Text>
          <Button variant="outline-secondary" onClick={handleClickGoBack}>Go Back</Button>
          <Button variant="outline-primary" onClick={handleSubmit}>Submit</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Submit;
