import React from 'react';
import PropTypes from 'prop-types';

import css from './SearchField.scss';

const SearchField = ({ input, placeholder }) => (
  <div className={css.module}>
    <input {...input} placeholder={placeholder} />
    <button><i className="fa fa-search" aria-hidden="true" /></button>
  </div>
);

SearchField.propTypes = {
  input: PropTypes.shape({}).isRequired,
  placeholder: PropTypes.string,
};

SearchField.defaultProps = { placeholder: '' };

export default SearchField;
