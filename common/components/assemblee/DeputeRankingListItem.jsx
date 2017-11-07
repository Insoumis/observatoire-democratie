import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router';

import css from './DeputeRankingListItem.scss';

const DeputeRankingListItem = ({ depute, location }) => {
  let stat;
  switch (location.query.sort) {
    case 'stats.positions.dissidence':
      stat = (
        <div className={css.stats}>
          <h3>Contre son groupe</h3>
          <div className={css.dissidence}>
            <span>{Math.ceil(depute.stats.positions.dissidence)} %</span>
          </div>
        </div>
      );
      break;
    case 'stats.nbitvs':
      stat = (
        <div className={css.stats}>
          <h3>Nombre d&apos;interventions</h3>
          <div className={css.talk}>
            <span>{Math.ceil(depute.stats.nbitvs)}</span>
          </div>
        </div>
      );
      break;
    case 'stats.nbmots':
      stat = (
        <div className={css.stats}>
          <h3>Nombre de mots</h3>
          <div className={css.words}>
            <span>{Math.ceil(depute.stats.nbmots)}</span>
          </div>
        </div>
      );
      break;
    case 'stats.amendements.rediges':
      stat = (
        <div className={css.stats}>
          <h3>Amendements rédigés</h3>
          <div className={css.law}>
            <span>{Math.ceil(depute.stats.amendements.rediges)}</span>
          </div>
        </div>
      );
      break;
    case 'stats.commissions.present':
      stat = (
        <div className={css.stats}>
          <h3>Présence en commission</h3>
          <div className={css.commission}>
            <span>{Math.ceil(depute.stats.commissions.present)} %</span>
          </div>
        </div>
      );
      break;
    default:
      stat = (
        <div className={css.stats}>
          <h3>Participation aux votes</h3>
          <div>
            <span>{Math.ceil(depute.stats.positions.exprimes)} %</span>
          </div>
        </div>
      );
  }

  return (
    <article className={css.module}>
      <div className={css.rank}>
        <span>{depute.depute_rank}</span>
      </div>
      <Link to={`/assemblee/deputes/${depute.id}`}>
        <img src={depute.depute_photo_an} alt="député" />
      </Link>
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
          <Link to={`/assemblee/groupes/${depute.groupe_abrev}`}>
            <i className="fa fa-group" /> {depute.groupe_libelle} ({depute.groupe_abrev})
          </Link>

          {stat}
        </div>
      </div>
    </article>
  );
};

DeputeRankingListItem.propTypes = {
  depute: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({
    query: PropTypes.shape({
      sort: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default withRouter(DeputeRankingListItem);
