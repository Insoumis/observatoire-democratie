import PropTypes from 'prop-types';
import React from 'react';
import DropdownList from 'react-widgets/lib/DropdownList';

const SelectField = ({ data, input, textField, valueField }) => (
  <DropdownList
    {...input}
    data={data}
    onChange={val => input.onChange(val[valueField])}
    textField={textField}
    valueField={valueField}
  />
);

SelectField.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  meta: PropTypes.shape({}).isRequired,
  textField: PropTypes.string.isRequired,
  valueField: PropTypes.string.isRequired,
};

export default SelectField;
