import React, { Component } from 'react';
import Login from './Components/App/Login';
import Users from './Components/App/Users';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValid: false,
      admin: {
        email: 'admin@admin.com',
        password: '12345',
      },
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(email, password) {
    const { admin } = this.state;

    if (admin.email === email && admin.password === password) {
      this.setState({ isValid: true });
    }
  }

  logout() {
    this.setState({ isValid: false });
  }

  render() {
    const { isValid } = this.state;

    return (
      <div>
        {!isValid ? (
          <Login login={this.login} />
        ) : (
          <Users logout={this.logout} />
        )}
      </div>
    );
  }
}

export default App;
