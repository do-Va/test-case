import { withStyles } from '@mui/styles';

const Sidebar = ({ classes }) => {
  return (
    <aside className={classes.Wrapper}>
      <h2>Sidebar</h2>
    </aside>
  );
};

const styles = {
  Wrapper: {
    width: '100%',
    maxWidth: '616.5px',
    height: '300px',
    border: '5px solid var(--clr-btn-f)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& h2': {
      fontSize: '3em',
      fontWeight: '900',
      textTransform: 'uppercase',
      letterSpacing: '5px',
    },
  },

  '@media only screen and (min-width:1003px)': {
    Wrapper: {
      width: '350px',
      minHeight: '100%',
      order: '1',
    },
  },
};

export default withStyles(styles)(Sidebar);
