import { makeStyles } from '@mui/styles';

const Navbar = ({ logout }) => {
  const classes = styles();

  const handleClick = () => {
    logout();
  };

  return (
    <nav className={classes.Wrapper}>
      <h2>Logo</h2>
      <button onClick={handleClick}>Logout</button>
    </nav>
  );
};

const styles = makeStyles({
  Wrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1em',
    position: 'sticky',
    top: '0',
    boxShadow: '0px 10px 10px rgba(0,0,0,.3)',
    background: '#fff',
    zIndex: '10',
    marginBottom: '1.5em',

    '&::after': {
      content: "''",
      width: '100%',
      height: '5px',
      background: 'var(--clr-main-gradient-animation)',
      position: 'absolute',
      left: '0',
      bottom: '0',
      animation: '$slideDown 3s linear infinite alternate',
    },

    '& button': {
      padding: '.3em 2em',
      border: 'none',
    },
  },

  '@keyframes slideDown': {
    from: { backgroundPosition: '0px' },
    to: { backgroundPosition: '1140px' },
  },
});

export default Navbar;
