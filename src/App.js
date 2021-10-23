import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './Components/App/Login';
import Dashboard from './Components/App/Dashboard';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValid: false,
      admin: {
        email: 'admin@admin.com',
        password: '123Admin',
      },
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(email, password) {
    const { admin } = this.state;

    if (admin.email === email && admin.password === password) {
      this.setState({ isValid: true });
    } else {
      this.setState({ isValid: false });
    }
  }

  logout() {
    this.setState({ isValid: false });
  }

  render() {
    const { isValid } = this.state;

    return (
      <Switch>
        <Route>
          {isValid === true ? (
            <>
              <Redirect to={'dashboard'} />
              <Route exact path="/dashboard">
                <Dashboard logout={this.logout} />
              </Route>
            </>
          ) : (
            <>
              <Redirect to={'/'} />
              <Route exact path="/">
                <Login login={this.login} />
              </Route>
            </>
          )}
        </Route>
      </Switch>
    );
  }
}

export default App;
