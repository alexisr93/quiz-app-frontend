import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function AnswerOption(props) {
  const [isActive, setIsActive] = useState('');

  const handleClick = (event) => {
    props.clickButton(event.target.name);
  };

  const checkActive = () => {
    if (props.optionSelected == props.name) {
      setIsActive('active');
    }
    else{
      setIsActive('');
    }
  }

  useEffect(() => {
    checkActive();
  });

  return (

    <Button
      name={props.name}
      className={isActive}
      onClick={handleClick}
      value={props.option}
      variant="light"
      size="lg"
      block
    >
      {props.option}
    </Button>
  );
}

export default AnswerOption;
