import React from 'react';
import { string, func, array } from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const propTypes = {
  value: string,
  onChange: func.isRequired,
  margin: string,
  variant: string,
  options: array.isRequired,
  placeholder: string,
};

const defaultProps = {
  value: '',
  margin: 'none',
  variant: '',
  placeholder: 'Надо что-то выбрать',
};

const CustomSelect = ({ onChange, options, placeholder, ...restProps }) => {
  const handleChange = e => onChange(e.target.value);
  const getOptions = () => {
    return [
      <MenuItem key="-1" value="" disabled>
        {placeholder}
      </MenuItem>,
      ...options.map(({ value, label }, index) => (
        <MenuItem key={index} value={value}>
          {label}
        </MenuItem>
      )),
    ];
  };
  return (
    <Select {...restProps} onChange={handleChange} label={restProps.placeholder} placeholder={restProps.placeholder}>
      {getOptions()}
    </Select>
  );
};

CustomSelect.propTypes = propTypes;
CustomSelect.defaultProps = defaultProps;

export default CustomSelect;
