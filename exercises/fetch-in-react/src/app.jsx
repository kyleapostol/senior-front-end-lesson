import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({ isLoading: false });
        this.setState({ users: myJson });
      });
  }
  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users}/>;
  }
}

export default App;
