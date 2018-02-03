import React from 'react';
import PropTypes from 'prop-types';

import ActiveLink from 'components/reusable/ActiveLink';

import css from './Depute.scss';

const DeputeVotes = ({ children, depute }) => (
  <div>
    <nav className={css.subnav}>
      <ActiveLink onlyActiveOnIndex to={`/assemblee/deputes/${depute.id}/votes`}>Vue d&apos;ensemble</ActiveLink>
      <ActiveLink onlyActiveOnIndex to={`/assemblee/deputes/${depute.id}/votes/votes-cles`}>Les votes-clés</ActiveLink>
      <ActiveLink onlyActiveOnIndex to={`/assemblee/deputes/${depute.id}/votes/votes-liste`}>Tous ses votes</ActiveLink>
    </nav>
    <div className={css.subcontent}>
      {React.cloneElement(children, { depute })}
    </div>
  </div>
);

DeputeVotes.propTypes = {
  children: PropTypes.node.isRequired,
  depute: PropTypes.shape({}),
};

DeputeVotes.defaultProps = { depute: {} };

export default DeputeVotes;
