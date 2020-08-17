import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Answer(props) {
  return (
    <Button variant="light" size="lg" block>
      {props.option}
    </Button>
  );
}

export default Answer;
