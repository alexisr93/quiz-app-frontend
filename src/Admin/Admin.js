import React from 'react';
import Container from 'react-bootstrap/Container';
import AdminNav from './AdminNav';
import QuizList from './QuizList';
import ViewQuiz from './ViewQuiz';

function Admin() {
  return (
    <>
      <AdminNav/>
      <Container>
        <QuizList/>
      </Container>
    </>
  );
}

export default Admin;
