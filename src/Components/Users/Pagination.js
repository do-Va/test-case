import Button from '../Users/Button';
import { withStyles } from '@mui/styles';

const Pagination = ({ prevPage, nextPage, data, handlePage, classes, page }) => {
  return (
    <div className={classes.Wrapper}>
      <button className={classes.prevBtn} onClick={prevPage}>
        prev
      </button>
      {data.map((_, index) => {
        return <Button key={index} handlePage={handlePage} index={index} page={page} />;
      })}
      <button className={classes.nextBtn} onClick={nextPage}>
        prev
      </button>
    </div>
  );
};

const styles = {
  Wrapper: {
    width: '100%',
    gridColumn: '1 / -1',
    display: 'flex',
    justifyContent: 'center',

    gap: '.5em',

    '& button': {
      padding: '.3em .5em',
    },
  },
};

export default withStyles(styles)(Pagination);
