import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router';

import { formatNbr } from 'utility';

import css from './DeputeRankingListItem.scss';



const DeputeRankingListItem = ({ depute, location }) => {
  let stat;
  switch (location.query.sort) {
    case 'stats.positions.dissidence':
      stat = (
        <div className={css.stats}>
          <h3>Contre son groupe</h3>
          <div className={css.dissidence}>
            <span>{formatNbr(depute.stats.positions.dissidence)} %</span>
          </div>
        </div>
      );
      break;
    case 'stats.nbitvs':
      stat = (
        <div className={css.stats}>
          <h3>Nombre d&apos;interventions</h3>
          <div className={css.talk}>
            <span>{formatNbr(depute.stats.nbitvs)}</span>
          </div>
        </div>
      );
      break;
    case 'stats.nbmots':
      stat = (
        <div className={css.stats}>
          <h3>Nombre de mots</h3>
          <div className={css.words}>
            <span>{formatNbr(depute.stats.nbmots)}</span>
          </div>
        </div>
      );
      break;
    case 'stats.amendements.rediges':
      stat = (
        <div className={css.stats}>
          <h3>Amendements rédigés</h3>
          <div className={css.law}>
            <span>{formatNbr(depute.stats.amendements.rediges)}</span>
          </div>
        </div>
      );
      break;
    case 'stats.commissions.present':
      stat = (
        <div className={css.stats}>
          <h3>Présence en commission</h3>
          <div className={css.commission}>
            <span>{formatNbr(depute.stats.commissions.present)} %</span>
          </div>
        </div>
      );
      break;
    default:
      stat = (
        <div className={css.stats}>
          <h3>Participation aux scrutins publics</h3>
          <div>
            <span>{formatNbr(depute.stats.positions.exprimes)} %</span>
          </div>
        </div>
      );
  }

  return (
    <article className={css.module}>
      <div className={css.rank}>
        <span>{depute.depute_rank}</span>
      </div>
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
          <Link to={`/assemblee/groupes/${depute.groupe_abrev}`}>
            <i className="fa fa-group" /> {depute.groupe_libelle} ({depute.groupe_abrev})
          </Link>

          {stat}

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
