import { withStyles } from '@mui/styles';

const Button = ({ index, handlePage, classes, page }) => {
  const handleClick = () => {
    handlePage(index);
  };

  return (
    <button
      className={index === page ? classes.activeBtn : null}
      onClick={handleClick}
    >
      {index + 1}
    </button>
  );
};

const styles = {
  activeBtn: {
    filter: 'brightness(120%)',
  },
};

export default withStyles(styles)(Button);
