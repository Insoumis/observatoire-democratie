import React from 'react';
import PropTypes from 'prop-types';

import ActiveLink from 'components/reusable/ActiveLink';

import css from './Depute.scss';

const DeputeParticipations = ({ children, depute }) => (
  <div>
    <nav className={css.subnav}>
      <ActiveLink onlyActiveOnIndex to={`/assemblee/deputes/${depute.id}/participations`}>Vue d&apos;ensemble</ActiveLink>
      <ActiveLink to={`/assemblee/deputes/${depute.id}/participations/interventions`}>Ses interventions</ActiveLink>
    </nav>
    <div className={css.subcontent}>
      {React.cloneElement(children, { depute })}
    </div>
  </div>
);

DeputeParticipations.propTypes = {
  children: PropTypes.node.isRequired,
  depute: PropTypes.shape({}),
};

DeputeParticipations.defaultProps = { depute: {} };

export default DeputeParticipations;
