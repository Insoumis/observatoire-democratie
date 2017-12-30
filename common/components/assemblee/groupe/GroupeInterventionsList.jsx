import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import { parseHTML } from 'utility';

import Spinner from 'components/reusable/Spinner';
import RequestError from 'components/reusable/RequestError';
import ActionPagination from 'components/reusable/ActionPagination';

import css from './GroupeParticipations.scss';

const GroupeInterventionsList = ({
  error, isPending, newSearch, pagination, refetch, search, interventions,
}) => {
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

  return (
    <div>
      <div className={css.count}>
        {pagination.totalItems} intervention
        {(pagination.totalItems > 1) ? 's' : ''}
      </div>
      <ul>
        {interventions.map(itv => (
          <li key={itv.itv_id}>
            <h3><span>{itv.itv_ctx[1]} ({itv.itv_ctx[0]})</span></h3>
            <h4>
              {itv.itv_ctx[2]}
              {itv.itv_ctx[3] && ` - ${itv.itv_ctx[3]}`}
              {itv.itv_ctx[4] && ` - ${itv.itv_ctx[4]}`}
            </h4>
            <h5>
              <Link to={`/assemblee/deputes/${itv.depute_shortid}/participations`}>
                <i className="fa fa-user-circle-o fa-fw" /> {itv.depute_nom}
              </Link>
            </h5>
            <blockquote>
              {parseHTML(itv.itv_contenu)}
            </blockquote>
            <div>
              <i className="fa fa-arrow-circle-o-right" />{' '}
              <a href={itv.itv_url} target="_blank">Voir l&apos;intervention</a>
            </div>
          </li>
        ))}
      </ul>
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

GroupeInterventionsList.propTypes = {
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  isPending: PropTypes.bool.isRequired,
  newSearch: PropTypes.func.isRequired,
  pagination: PropTypes.shape({}).isRequired,
  refetch: PropTypes.func.isRequired,
  search: PropTypes.shape({}).isRequired,
  interventions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GroupeInterventionsList;
