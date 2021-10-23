import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { useFetch } from '../../utils/useFetch';

import User from '../Users/User';
import Pagination from '../Users/Pagination';

const Users = () => {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState([]);

  const classes = styles();

  useEffect(() => {
    if (loading) return;
    setUsers(data[page]);
  }, [loading, page, data]);

  const handlePage = index => {
    setPage(index);
  };

  const nextPage = () => {
    setPage(oldPage => {
      let nextPage = oldPage + 1;

      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage(oldPage => {
      let prevPage = oldPage - 1;

      if (prevPage < 0) {
        prevPage = data.length - 1;
      }

      return prevPage;
    });
  };

  return (
    <section className={classes.Wrapper}>
      {loading ? (
        <div className={classes.container}>
          <div className={classes.text}>loading</div>
          <div className={classes.ring}></div>
        </div>
      ) : (
        users.map(user => <User key={user.id} {...user} />)
      )}

      {!loading && (
        <Pagination
          handlePage={handlePage}
          prevPage={prevPage}
          nextPage={nextPage}
          data={data}
          page={page}
        />
      )}
    </section>
  );
};

const styles = makeStyles({
  Wrapper: {
    width: '100%',
    maxWidth: '616.5px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px,300px))',
    justifyContent: 'center',
    alignContent: 'center',
    gap: '1em',
  },

  container: {
    position: 'relative',
    width: '100px',
    height: '100px',
    gridColumn: '1 / 3',
    marginInline: 'auto',
  },

  text: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    lineHeight: '100px',
    fontSize: '1em',
    fontWeight: '700',
    color: 'var(--clr-ring-f)',
    textTransform: 'uppercase',
  },

  ring: {
    width: '100%',
    height: '100%',
    background: 'transparent',
    borderRadius: '50%',
    borderTop: '4px solid var(--clr-form-f)',
    animation: '$rotate 1s linear infinite',
  },

  '@keyframes rotate': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },

  '@media only screen and (min-width:900px)': {
    Wrapper: {
      marginTop: '0',
    },
  },
});

export default Users;
