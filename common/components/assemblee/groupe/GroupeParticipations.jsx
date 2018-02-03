import React from 'react';
import PropTypes from 'prop-types';

import ActiveLink from 'components/reusable/ActiveLink';

import css from './Groupe.scss';

const GroupeParticipations = ({ children, groupe }) => (
  <div>
    <nav className={css.subnav}>
      <ActiveLink onlyActiveOnIndex to={`/assemblee/groupes/${groupe.groupe_abrev}/participations`}>Vue d&apos;ensemble</ActiveLink>
      <ActiveLink to={`/assemblee/groupes/${groupe.groupe_abrev}/participations/travaux`}>Les travaux</ActiveLink>
      <ActiveLink to={`/assemblee/groupes/${groupe.groupe_abrev}/participations/interventions`}>Les interventions</ActiveLink>
    </nav>
    <div className={css.subcontent}>
      {React.cloneElement(children, { groupe })}
    </div>
  </div>
);

GroupeParticipations.propTypes = {
  children: PropTypes.node.isRequired,
  groupe: PropTypes.shape({}),
};

GroupeParticipations.defaultProps = { groupe: {} };

export default GroupeParticipations;
