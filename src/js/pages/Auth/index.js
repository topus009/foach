import React, { useState } from 'react';
import cn from 'classnames';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { signUp } from '../../redux/actions/AuthActions';
import CustomTextInput from '../../components/common/CustomTextInput';
import CustomSelect from '../../components/common/CustomSelect';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { useAuthStyles } from './styles';
import { useCommonStyles } from '../../../styles/common';

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

const selectOptions = [
  {
    value: 'true',
    label: 'Принять Тополова С. на работу',
  },
];

const Auth = ({ signUp }) => {
  const [fields, setFields] = useState({});
  const [selected, setSelected] = useState('');
  const [errors, setErrors] = useState({});

  const classes = useAuthStyles();
  const commonClasses = useCommonStyles();
  const composedwrapperClasses = cn(classes.auth, commonClasses.container);

  const handleSubmit = () => signUp(fields);

  const isBtnDisabled = () =>
    !Object.values(fields)
      .join('')
      .trim().length ||
    Object.values(errors).some(bool => bool) ||
    !selected;

  const handleValidateField = (field, value) => setErrors({ ...errors, [field]: !validateRules[field](value) });

  const handleChangeField = (field, value) => {
    if (field === 'selectField') {
      setSelected(value);
    } else {
      setFields({ ...fields, [field]: value });
      handleValidateField(field, value);
    }
  };

  return (
    <div className={composedwrapperClasses}>
      <FormControl className={classes.form}>
        <CustomTextInput
          value={fields.email || ''}
          onChange={value => handleChangeField('email', value)}
          label="Email"
          variant="outlined"
          helperText="invalid email"
          error={errors.email}
        />
        <CustomTextInput
          value={fields.password || ''}
          onChange={value => handleChangeField('password', value)}
          label="Пароль"
          type="password"
          variant="outlined"
          helperText="min 8 symbols"
          error={errors.password}
        />
        <CustomSelect
          value={selected}
          onChange={value => handleChangeField('selectField', value)}
          variant="outlined"
          options={selectOptions}
        />
      </FormControl>
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
