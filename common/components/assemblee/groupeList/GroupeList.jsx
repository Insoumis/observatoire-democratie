import React from 'react';
import PropTypes from 'prop-types';

import Spinner from 'components/reusable/Spinner';
import RequestError from 'components/reusable/RequestError';
import Pagination from 'components/reusable/Pagination';

import css from './GroupeList.scss';

const GroupeList = ({ baseLink, groupes, error, isPending, ListItem, pagination, refetch }) => {
  if (isPending) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className={css.retry}>
        <RequestError retry={refetch} />
      </div>
    );
  }

  console.log(groupes);

  return (
    <div className={css.module}>
      <div className={css.count}>
        {pagination.totalItems} député
        {(pagination.totalItems > 1) ? 's' : ''}
      </div>
      <ul>
        {groupes.map(groupe => (
          <ListItem groupe={groupe} key={groupe.groupe_abrev} />
        ))}
      </ul>
      {(pagination.nbrPages > 1) ?
        <Pagination
          baseLink={baseLink}
          currentPage={pagination.currentPage}
          nbrPages={pagination.nbrPages}
        />
        :
        false
      }
    </div>
  );
};

GroupeList.propTypes = {
  baseLink: PropTypes.string.isRequired,
  groupes: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  isPending: PropTypes.bool.isRequired,
  ListItem: PropTypes.func.isRequired,
  pagination: PropTypes.shape({
    totalItems: PropTypes.number,
  }).isRequired,
  refetch: PropTypes.func.isRequired,
};

export default GroupeList;
