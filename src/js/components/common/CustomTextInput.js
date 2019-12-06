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
  helperText: string,
  error: bool,
};

const defaultProps = {
  autoFocus: false,
  label: '',
  type: 'text',
  onBlur: () => false,
  variant: '',
  margin: 'none',
  helperText: '',
  error: false,
};

const CustomTextInput = ({ onChange, helperText, ...restProps }) => {
  const handleChange = e => onChange(e.target.value);
  return <TextField {...restProps} onChange={handleChange} helperText={restProps.error ? helperText : <span />} />;
};

CustomTextInput.propTypes = propTypes;
CustomTextInput.defaultProps = defaultProps;

export default CustomTextInput;
