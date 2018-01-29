import React from 'react';
import PropTypes from 'prop-types';

import { formatNbr } from 'utility';

import Spinner from 'components/reusable/Spinner';
import RequestError from 'components/reusable/RequestError';
import Pagination from 'components/reusable/Pagination';

import css from './List.scss';

const List = ({ baseLink, error, isPending, list, pagination, refetch }) => {
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

  return (
    <div className={css.module}>
      <div className={css.count}>
        {formatNbr(pagination.totalItems)} élément
        {(pagination.totalItems > 1) ? 's' : ''}
      </div>

      {list}

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

List.propTypes = {
  baseLink: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  isPending: PropTypes.bool.isRequired,
  list: PropTypes.node.isRequired,
  pagination: PropTypes.shape({
    totalItems: PropTypes.number,
  }).isRequired,
  refetch: PropTypes.func.isRequired,
};

export default List;
