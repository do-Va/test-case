import React, { useState } from 'react';
import { withStyles } from '@mui/styles';
import { emailIsValid, passwordIsValid } from '../../utils/helper';

const Form = ({ classes, login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const handleChange = evt => {
    if (evt.target.name === 'email') {
      setEmail(evt.target.value);
    } else {
      setPassword(evt.target.value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (emailIsValid(email) && email !== null) {
      setIsEmailError(false);
    } else {
      setIsEmailError(true);
    }

    if (passwordIsValid(password) && password !== null) {
      login(email, password);
      setIsPasswordError(false);
    } else {
      setIsPasswordError(true);
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.formGroup}>
        <label htmlFor="email">email</label>
        <input type="email" name="email" id="emai" onChange={handleChange} />
        <i className={isEmailError ? classes.show : 'null'}>
          Please provide a valid email address
        </i>
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />
        <i className={isPasswordError ? classes.show : 'null'}>
          A minimum 8 characters password contains a combination of uppercase
          and lowercase letter and number are required.
        </i>
      </div>

      <button type="submit" className={classes.btn}>
        login
      </button>
    </form>
  );
};

const styles = {
  form: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    padding: '2em',
    background: 'var(--clr-secondary-bg)',
    borderRadius: '12px',

    boxShadow: '0px 10px 20px rgba(0,0,0, .1)',

    '& > *:not(:last-child)': {
      marginBottom: '.7em',
    },
  },

  formGroup: {
    width: '100%',

    '& label': {
      color: 'var(--clr-form-f)',
      textTransform: 'capitalize',
    },

    '& input': {
      width: '100%',
      padding: '.5em 1em',
      marginBlock: '.3em',
      border: 'transparent',
      borderRadius: '5px',
      background: '#eee',

      '&:focus': {
        outline: '1px solid var(--clr-form-f)',
      },
    },

    '& i': {
      color: 'red',
      fontSize: '.8em',
      display: 'none',
    },
  },

  show: {
    display: 'block !important',
  },

  btn: {
    marginTop: '2em',
    padding: '1em 2em',
    textTransform: 'uppercase',
    letterSpacing: '5px',
    border: 'none',
    background: 'var(--clr-form-f)',
    borderRadius: '5px',
    color: 'var(--clr-btn-f)',
    fontWeight: 'bold',
    transition: 'all .2s linear',

    '&:hover': {
      filter: 'brightness(120%)',
    },
  },
};

export default withStyles(styles)(Form);
