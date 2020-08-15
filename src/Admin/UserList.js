import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import UserListItem from './UserListItem';

let url = 'http://localhost:4000';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.fetchUsers = this.fetchUsers.bind(this);
  }
  fetchUsers() {
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
  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    let listOfUsers = this.state.users.map(element => {
      return (
        <UserListItem
          key={element.username}
          username={element.username}
          email={element.email}
          refreshUsers={this.fetchUsers}
        />
      );
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
