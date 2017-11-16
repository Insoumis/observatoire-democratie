import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import css from './Pagination.scss';

const ActionPagination = ({ action, currentQuery, currentPage, nbrPages }) => {
  const handleClick = page =>
    action({ ...currentQuery, page });

  const getFirstPage = () => {
    if (currentPage === 1) {
      return false;
    }

    return <button onClick={() => handleClick(1)}>{'<<'}</button>;
  };

  const getPrevPage = () => {
    if (currentPage === 1) {
      return false;
    }

    return (
      <button onClick={() => handleClick(currentPage - 1)}>
        {'<'}
      </button>
    );
  };

  const getNextPage = () => {
    if (currentPage === nbrPages) {
      return false;
    }

    return (
      <button onClick={() => handleClick(currentPage + 1)}>
        {'>'}
      </button>
    );
  };

  const getLastPage = () => {
    if (currentPage === nbrPages) {
      return false;
    }

    return (
      <button onClick={() => handleClick(nbrPages)}>{'>>'}</button>
    );
  };

  const getContent = () => {
    let start = 2;
    let limit = nbrPages;

    const content = [];

    if (currentPage < 10 || nbrPages === 10) {
      // Page 1 is displayed
      content[1] = (
        <button
          className={classNames({ active: currentPage === 1 })}
          key={1}
          onClick={() => handleClick(1)}
        >
        1
        </button>
      );
    }

    if (nbrPages > 10) {
      if (currentPage >= 10) {
        // The start is not on page 1 but on the middle displayed
        start = currentPage - 5;
        // We don't show more than 10 pages
        limit = (nbrPages - currentPage > 4) ? start + 9 : nbrPages;
      } else {
        // We don't show more than 10 pages
        limit = 10;
      }

      if (limit === nbrPages) {
        // We display the last 10 pages even if the start is not in the middle
        start = nbrPages - 9;
      }
    }

    for (let i = start; i <= limit; i += 1) {
      content.push((
        <button
          className={classNames({ active: currentPage === i })}
          key={i}
          onClick={() => handleClick(i)}
        >
          {i}
        </button>
      ));
    }

    return content;
  };

  return (
    <div className={css.module}>
      {getFirstPage()}
      {getPrevPage()}
      {getContent()}
      {getNextPage()}
      {getLastPage()}
    </div>
  );
};

ActionPagination.propTypes = {
  action: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  currentQuery: PropTypes.shape({}).isRequired,
  nbrPages: PropTypes.number.isRequired,
};

export default ActionPagination;

