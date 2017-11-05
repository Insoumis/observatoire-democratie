import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import css from './DeputeSearchListItem.scss';

const DeputeSearchListItem = ({ depute }) => (
  <article className={css.module}>
    <Link to={`/assemblee/deputes/${depute.id}`}>
      <img src={depute.photo_an} alt="député" />
    </Link>
    <div>
      <Link to={`/assemblee/deputes/${depute.id}`}>
        <header>
          <h2>
            <span>{
              depute.depute_region} / {depute.depute_departement} / {depute.depute_circo}
            </span>
          </h2>
          <h1>{depute.depute_nom}</h1>
        </header>
      </Link>

      <div className={css.infos}>
        <div>
          <i className="fa fa-briefcase" aria-hidden="true" />
          {' '}
          {depute.depute_profession || depute.depute_csp}
        </div>
        <div>
          <i className="fa fa-birthday-cake" aria-hidden="true" /> {depute.depute_naissance}
        </div>
        <Link to={`/assemblee/groupes/${depute.groupe_abrev}`}>
          <i className="fa fa-group" /> {depute.groupe_libelle} ({depute.groupe_abrev})
        </Link>

        <div className={css.stats}>
          <div className={css.participation}>
            <h3>Participation</h3>
            <div>{Math.ceil(depute.stats.positions.exprimes)} %</div>
          </div>
          <div className={css.dissidence}>
            <h3>Contre son groupe</h3>
            <div>{Math.ceil(depute.stats.positions.dissidence)} %</div>
          </div>
        </div>
      </div>
    </div>
  </article>
);

DeputeSearchListItem.propTypes = {
  depute: PropTypes.shape({
    depute_nom: PropTypes.string.isRequired,
  }).isRequired,
};

export default DeputeSearchListItem;
