import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import { formatNbr } from 'utility';

import css from './DeputeSearchListItem.scss';

const DeputeSearchListItem = ({ depute }) => (
  <article className={css.module}>
    <div className={css.photo}>
      <Link to={`/assemblee/deputes/${depute.id}`}>
        <img src={depute.depute_photo_an} alt="député" />
      </Link>
    </div>
    <div>
      <Link to={`/assemblee/deputes/${depute.id}`}>
        <header>
          <h2>
            <span>{depute.depute_circo_complet}</span>
          </h2>
          <h1>{depute.depute_nom}</h1>
        </header>
      </Link>

      <div className={css.infos}>
        {(depute.groupe_abrev !== 'NI') ?
          <Link to={`/assemblee/groupes/${depute.groupe_abrev}`}>
            <i className="fa fa-group" /> {depute.groupe_libelle} ({depute.groupe_abrev})
          </Link>
          :
          <div>
            <i className="fa fa-group" /> {depute.groupe_libelle} ({depute.groupe_abrev})
          </div>
        }
        <div>
          <i className="fa fa-briefcase" aria-hidden="true" />
          {' '}
          {depute.depute_profession || depute.depute_csp}
        </div>
        <div>
          <i className="fa fa-birthday-cake" aria-hidden="true" /> {depute.depute_naissance}
        </div>

        <div className={css.stats}>
          <div className={css.participation}>
            <h3>Participation</h3>
            <div>{formatNbr(depute.stats.positions.exprimes)} %</div>
          </div>
          <div className={css.dissidence}>
            <h3>Contre son groupe</h3>
            <div>
              {(depute.groupe_abrev === 'NI') ?
                'Non disponible'
                :
                `${formatNbr(depute.stats.positions.dissidence)} %`
              }
            </div>
          </div>
          <div className={css.commission}>
            <h3>Présence commission</h3>
            <div>{formatNbr(depute.stats.commissions.present)} %</div>
          </div>
          <div className={css.talk}>
            <h3>Interventions</h3>
            <div>{formatNbr(depute.stats.nbitvs)}</div>
          </div>
        </div>
        {(depute.depute_bureau) ?
          <div className={css.role}>
            <i className="fa fa-exclamation-circle" aria-hidden="true" /> {depute.depute_bureau}
          </div>
          :
          false
        }
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
