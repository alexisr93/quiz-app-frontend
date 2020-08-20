import React from 'react';
import Container from 'react-bootstrap/Container';
import AdminNav from './AdminNav';
import UserList from './UserList';

function Admin() {
  return (
    <>
      <AdminNav/>
      <Container>
        <UserList/>
      </Container>
    </>
  );
}

export default Admin;
