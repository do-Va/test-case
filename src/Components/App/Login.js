import { withStyles } from '@mui/styles';
import Form from '../Login/Form';

const Login = ({ classes, login }) => {
  return (
    <section className={classes.Wrapper}>
      <Form login={login} />
    </section>
  );
};

const styles = {
  Wrapper: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'var(--clr-main-gradient-bg)',
  },
};

export default withStyles(styles)(Login);
