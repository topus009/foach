import React from 'react';
import { string, bool, func } from 'prop-types';
import TextField from '@material-ui/core/TextField';

const propTypes = {
  value: string.isRequired,
  onBlur: func,
  onChange: func.isRequired,
  autoFocus: bool,
  label: string,
  type: string,
  variant: string,
  margin: string,
};

const defaultProps = {
  autoFocus: false,
  label: '',
  type: 'text',
  onBlur: () => false,
  variant: '',
  margin: 'none',
};

const TextInput = ({ value, onBlur, onChange, autoFocus, label, type, variant, margin }) => {
  const handleChange = e => onChange(e.target.value);
  return (
    <TextField
      type={type}
      value={value}
      onChange={handleChange}
      autoFocus={autoFocus}
      label={label}
      variant={variant}
      margin={margin}
    />
  );
};

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
