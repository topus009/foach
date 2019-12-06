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

const validateRules = {
  email: value => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(value.trim());
  },
  password: value => value.trim().length > 7,
};

const Auth = ({ signUp }) => {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});

  const classes = useAuthStyles();

  const handleSubmit = () => signUp(fields);

  const isBtnDisabled = () =>
    !Object.values(fields)
      .join('')
      .trim().length || Object.values(errors).some(bool => !bool);

  const handleValidateField = (field, value) => setErrors({ ...errors, [field]: validateRules[field](value) });

  const handleChangeField = (field, value) => {
    handleValidateField(field, value);
    setFields({ ...fields, [field]: value });
  };

  return (
    <div className={classes.auth}>
      <TextInput
        value={fields.email || ''}
        onChange={value => handleChangeField('email', value)}
        label="Email"
        variant="outlined"
        margin="normal"
        error={errors.email}
      />
      <TextInput
        value={fields.password || ''}
        onChange={value => handleChangeField('password', value)}
        label="Пароль"
        type="password"
        variant="outlined"
        error={errors.password}
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
