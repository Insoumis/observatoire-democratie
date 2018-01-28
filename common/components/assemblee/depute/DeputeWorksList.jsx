import React from 'react';
import PropTypes from 'prop-types';

import Spinner from 'components/reusable/Spinner';
import RequestError from 'components/reusable/RequestError';
import ActionPagination from 'components/reusable/ActionPagination';

import { formatDate } from 'utility';

import css from './DeputeParticipations.scss';

const DeputeWorkList = ({ error, isPending, newSearch, pagination, refetch, search, works }) => {
  if (isPending) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div>
        <RequestError retry={refetch} />
      </div>
    );
  }

  const getResult = (work) => {
    switch (work.sort) {
      case 'Adopté':
        return (
          <div>
            <span className={css.pour}>
              <i className="fa fa-check fa-fw" /> Adopté
            </span>
            {work.type_libelle} du {formatDate(work.date.$date)}
          </div>
        );
      case 'Rejeté':
        return (
          <div>
            <span className={css.contre}>
              <i className="fa fa-times fa-fw" /> Rejeté
            </span>
            {work.type_libelle} du {formatDate(work.date.$date)}
          </div>
        );
      case 'Non renseigné':
        return (
          <div>
            <span className={css.pending}>
              <i className="fa fa-question fa-fw" /> Non renseigné
            </span>
            {work.type_libelle} du {formatDate(work.date.$date)}
          </div>
        );
      default:
        return (
          <div>
            {work.type_libelle} du {formatDate(work.date.$date)}
          </div>
        );
    }
  };

  return (
    <div>
      <div className={css.count}>
        {pagination.totalItems} travaux
      </div>

      {works.map(work => (
        <article key={work.id}>
          <h3>
            {work.dossier}
          </h3>
          {getResult(work)}
          <p>
            {work.description}<br />
            <i className="fa fa-arrow-circle-o-right" />{' '}
            <a href={work.lien} target="_blank">Voir la source</a>
          </p>
        </article>
      ))}

      {(pagination.nbrPages > 1) ?
        <ActionPagination
          action={newSearch}
          currentPage={pagination.currentPage}
          currentQuery={search}
          nbrPages={pagination.nbrPages}
        />
        :
        false
      }
    </div>
  );
};

DeputeWorkList.propTypes = {
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  isPending: PropTypes.bool.isRequired,
  newSearch: PropTypes.func.isRequired,
  pagination: PropTypes.shape({}).isRequired,
  refetch: PropTypes.func.isRequired,
  search: PropTypes.shape({}).isRequired,
  works: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DeputeWorkList;
