import PropTypes from 'prop-types';
import React from 'react';
import DropdownList from 'react-widgets/lib/DropdownList';

const SelectField = ({ data, input, textField, valueField }) => (
  <DropdownList
    {...input}
    data={data}
    onChange={val => input.onChange(val[valueField] || val)}
    textField={textField}
    valueField={valueField}
  />
);

SelectField.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  meta: PropTypes.shape({}).isRequired,
  textField: PropTypes.string,
  valueField: PropTypes.string,
};

SelectField.defaultProps = {
  textField: undefined,
  valueField: undefined,
};

export default SelectField;
