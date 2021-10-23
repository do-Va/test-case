import React, { useState, Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';

import Login from './Components/App/Login';
import Dashboard from './Components/App/Dashboard';
import Error from './Components/App/Error';

/* Class Component  */
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

    // return isValid ? (
    //   <Dashboard logout={this.logout} />
    // ) : (
    //   <Login login={this.login} />
    // );

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Login login={this.login} />
          </Route>
          <Route exact path="/dashboard">
            {isValid ? <Dashboard logout={this.logout} /> : <Error />}
          </Route>
        </Switch>
      </Router>
    );
  }
}

/* Func Component  */
// const App = () => {
//   const [isValid, setIsValid] = useState(false);

//   let history = useHistory();

//   const admin = {
//     email: 'admin@admin.com',
//     password: '123Admin',
//   };

//   const login = (email, password) => {
//     if (admin.email === email && admin.password === password) {
//       setIsValid(true);
//       history.push('/dashboard');
//     } else {
//       setIsValid(false);
//     }
//   };

//   const logout = () => {
//     setIsValid(false);
//   };

//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/">
//           <Login login={login} />
//         </Route>
//         <Route exact path="/dashboard">
//           {isValid ? <Dashboard logout={logout} /> : <Error />}
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

export default App;
