import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router';

import { formatNbr } from 'utility';

import css from './GroupeRankingListItem.scss';

const GroupeRankingListItem = ({ groupe, location, stat }) => {
  let content;
  let rank;

  const initContent = (param) => {
    switch (param) {
      case 'stats.positions.dissidence':
        content = (
          <div className={css.stats}>
            <h3>Contre son groupe</h3>
            <div className={css.dissidence}>
              <span>{formatNbr(groupe.stats.positions.dissidence)} %</span>
            </div>
          </div>
        );

        if (location.query.ordre === 'asc') {
          rank = groupe.stats.ranks.up.dissidence;
        } else {
          rank = groupe.stats.ranks.down.dissidence;
        }

        break;
      case 'stats.nbitvs':
        content = (
          <div className={css.stats}>
            <h3>Nombre d&apos;interventions</h3>
            <div className={css.talk}>
              <span>{formatNbr(groupe.stats.nbitvs)}</span>
            </div>
          </div>
        );

        if (location.query.ordre === 'asc') {
          rank = groupe.stats.ranks.up.nbitvs;
        } else {
          rank = groupe.stats.ranks.down.nbitvs;
        }

        break;
      case 'stats.nbmots':
        content = (
          <div className={css.stats}>
            <h3>Nombre de mots</h3>
            <div className={css.words}>
              <span>{formatNbr(groupe.stats.nbmots)}</span>
            </div>
          </div>
        );

        if (location.query.ordre === 'asc') {
          rank = groupe.stats.ranks.up.nbmots;
        } else {
          rank = groupe.stats.ranks.down.nbmots;
        }

        break;
      case 'stats.amendements.rediges':
        content = (
          <div className={css.stats}>
            <h3>Amendements rédigés</h3>
            <div className={css.law}>
              <span>{formatNbr(groupe.stats.amendements.rediges)}</span>
            </div>
          </div>
        );

        if (location.query.ordre === 'asc') {
          rank = groupe.stats.ranks.up.nbamendements;
        } else {
          rank = groupe.stats.ranks.down.nbamendements;
        }

        break;
      case 'stats.commissions.toutes.present':
        content = (
          <div className={css.stats}>
            <h3>Présence en commission</h3>
            <div className={css.commission}>
              <span>{formatNbr(groupe.stats.commissions.toutes.present)} %</span>
            </div>
          </div>
        );

        if (location.query.ordre === 'asc') {
          rank = groupe.stats.ranks.up.pctcommissions;
        } else {
          rank = groupe.stats.ranks.down.pctcommissions;
        }

        break;
      default:
        content = (
          <div className={css.stats}>
            <h3>Participation aux scrutins publics</h3>
            <div>
              <span>{formatNbr(groupe.stats.positions.exprimes)} %</span>
            </div>
          </div>
        );

        if (location.query.ordre === 'asc') {
          rank = groupe.stats.ranks.up.exprimes;
        } else {
          rank = groupe.stats.ranks.down.exprimes;
        }
    }
  };

  initContent(stat || location.query.tri);

  return (
    <article className={css.module}>
      <div className={css.rank}>
        <span className={`rank${rank}`}>{rank}</span>
      </div>
      <div>
        <Link to={`/assemblee/groupes/${groupe.groupe_abrev}`}>
          <header>
            <h1>{groupe.groupe_libelle} ({groupe.groupe_abrev})</h1>
          </header>
        </Link>

        <div className={css.infos}>
          {content}
        </div>
      </div>
    </article>
  );
};

GroupeRankingListItem.propTypes = {
  groupe: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({
    query: PropTypes.shape({
      sort: PropTypes.string,
    }).isRequired,
  }).isRequired,
  stat: PropTypes.string,
};

GroupeRankingListItem.defaultProps = { stat: null };

export default withRouter(GroupeRankingListItem);
