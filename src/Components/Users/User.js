import { withStyles } from '@mui/styles';

const User = ({ firstName, lastName, picture, classes }) => {
  return (
    <figure className={classes.Wrapper}>
      <img src={picture} alt={`${firstName} ${lastName}`} />
      <div className={classes.content}>
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
    </figure>
  );
};

const styles = {
  Wrapper: {
    padding: '1em 2em',
    display: 'flex',
    alignItems: 'center',
    gap: '1em',
    background: 'var(--clr-main-gradient-bg)',

    '& img': {
      width: '75px',
      borderRadius: '50%',
      border: '3px solid #fff',
    },
  },
  content: {
    fontSize: '1.3em',
    color: '#fff',
    background: 'rgba(255,255,255,.2)',
    width: '300px',
    padding: '.3em 1em',
  },
};

export default withStyles(styles)(User);
