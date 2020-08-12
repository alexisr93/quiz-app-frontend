import React from 'react';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import UserListItem from './UserListItem';

let url = 'http://localhost:4000';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch(url + '/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.setState({users: data});
      })
     .catch(console.log)
  }

  render() {
    let listOfUsers = this.state.users.map(element => {
      return <UserListItem username={element.username} email={element.email}/>
    })
    return (
      <Container className="mt-4">
        <Table hover>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listOfUsers}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default UserList;
