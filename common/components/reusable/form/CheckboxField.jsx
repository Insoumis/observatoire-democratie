import PropTypes from 'prop-types';
import React from 'react';

import css from './CheckboxField.scss';

const CheckboxField = ({ input, label }) => (
  <div className={css.module}>
    <input {...input} checked={input.value} id={input.name} type="checkbox" />
    <label htmlFor={input.name}>{label}</label>
  </div>
);

CheckboxField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.bool,
  }).isRequired,
  label: PropTypes.string.isRequired,
};

export default CheckboxField;
