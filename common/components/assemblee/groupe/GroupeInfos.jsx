import React from 'react';
import PropTypes from 'prop-types';

import { parseHTML } from 'utility';

import css from './Groupe.scss';

const GroupeInfos = ({ groupe }) => (
  <div className={css.subcontent}>
    {parseHTML(groupe.groupe_declaration)}
  </div>
);

GroupeInfos.propTypes = {
  groupe: PropTypes.shape({
    groupe_declaration: PropTypes.string.isRequired,
  }),
};

GroupeInfos.defaultProps = { groupe: undefined };

export default GroupeInfos;
