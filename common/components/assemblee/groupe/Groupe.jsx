import React from 'react';
import PropTypes from 'prop-types';

import css from './Groupe.scss';

const Groupe = props => {
  return (
    <div className={`container ${css.module}`}>
      Les pages de groupes arrivent très très bientôt ! <i className="fa fa-smile-o" />
    </div>
  );
};

Groupe.propTypes = {

};

export default Groupe;
