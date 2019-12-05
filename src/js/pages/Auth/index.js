import React, { useState } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { signUp } from '../../redux/actions/AuthActions';
import TextInput from '../../components/common/TextInput';
import Button from '@material-ui/core/Button';
import { useAuthStyles } from './styles';

const propTypes = {
  signUp: func.isRequired,
};

const Auth = ({ signUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const classes = useAuthStyles();

  const handleSubmit = () => signUp({ email, password });

  const isBtnDisabled = () => !email.trim().length || !password.trim().length;

  return (
    <div className={classes.auth}>
      <TextInput
        value={email}
        onChange={value => setEmail(value)}
        label="Email"
        variant="outlined"
        margin="normal"
        type="email"
      />
      <TextInput
        value={password}
        onChange={value => setPassword(value)}
        label="Password"
        type="password"
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit} disabled={isBtnDisabled()}>
        Зарегистрироваться
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: params => dispatch(signUp(params)),
  };
};

Auth.propTypes = propTypes;

export default connect(null, mapDispatchToProps)(Auth);
