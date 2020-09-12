import React from 'react';
import Card from 'react-bootstrap/Card';

function UserDashboard() {
  return (
    <>
      <h2 className="mt-4 mb-5">Hi, {localStorage.getItem('username')}!</h2>
      <h4>Quizzes Take:</h4>
      <h1>10</h1>
      <br/>
      <h4>Last Quiz Taken:</h4>
      <h1>Quiz 1</h1>
      <br/>
      <h4>Quizzes Failed</h4>
      <h1>5</h1>
    </>
  )
}

export default UserDashboard;
