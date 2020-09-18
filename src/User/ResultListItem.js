import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ResultListItem(props) {
  return (
    <tr>
      <td>{props.quizTitle}</td>
      <td>{props.quizScore}</td>
      <td>{props.dateQuizTaken}</td>
    </tr>
  );

}

export default ResultListItem;
