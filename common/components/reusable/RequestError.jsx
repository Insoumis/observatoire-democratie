import React from 'react';
import PropTypes from 'prop-types';

import css from './RequestError.scss';

const RequestError = ({ retry }) => (
  <div className={css.module}>
    <p>Une erreur est survenue lors du chargement des données.</p>
    <button onClick={retry}>Réessayer</button>
  </div>
);

RequestError.propTypes = { retry: PropTypes.func.isRequired };

export default RequestError;
