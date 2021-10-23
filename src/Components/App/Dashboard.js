import React, { Component } from 'react';
import { withStyles } from '@mui/styles';

import Navbar from '../Dashboard/Navbar';
import Sidebar from '../Dashboard/Sidebar';
import Users from '../Dashboard/Users';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes, logout } = this.props;
    return (
      <section className={classes.Wrapper}>
        <Navbar logout={logout} />
        <main>
          <Sidebar />
          <Users />
        </main>
      </section>
    );
  }
}

const styles = {
  Wrapper: {
    width: '100%',
    maxWidth: '1140px',
    minHeight: '100%',
    marginInline: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '1.5em',

    '& main': {
      width: '90%',
      minHeight: '100vh',
      display: ' flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2em',
    },
  },

  '@media only screen and (min-width:1003px)': {
    Wrapper: {
      '& main': {
        flexDirection: 'row',
      },
    },
  },
};

export default withStyles(styles)(Dashboard);
