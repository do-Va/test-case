import { withStyles } from '@mui/styles';

const Error = ({ classes }) => {
  return <h2 className={classes.title}>User login is required.</h2>;
};

const styles = {
  title: {
    textAlign: 'center',
    marginTop: '2em',
  },
};

export default withStyles(styles)(Error);
