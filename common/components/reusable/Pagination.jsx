import PropTypes from 'prop-types';
import React from 'react';
import { Link, withRouter } from 'react-router';
import classNames from 'classnames';
import qs from 'qs';

import ActiveLink from 'components/reusable/ActiveLink';

import css from './Pagination.scss';

const Pagination = ({
  baseLink, currentPage, nbrPages, router: { location: { query } },
}) => {
  const getPageLink = (page) => {
    const search = { ...query, page };
    return `${baseLink}?${qs.stringify(search)}`;
  };

  const getFirstPage = () => {
    if (currentPage === 1) {
      return false;
    }

    return <Link to={getPageLink(1)}>{'<<'}</Link>;
  };

  const getPrevPage = () => {
    if (currentPage === 1) {
      return false;
    }

    return (
      <Link to={getPageLink(currentPage - 1)}>
        {'<'}
      </Link>
    );
  };

  const getNextPage = () => {
    if (currentPage === nbrPages) {
      return false;
    }

    return (
      <Link to={getPageLink(currentPage + 1)}>
        {'>'}
      </Link>
    );
  };

  const getLastPage = () => {
    if (currentPage === nbrPages) {
      return false;
    }

    return (
      <Link to={getPageLink(nbrPages)}>{'>>'}</Link>
    );
  };

  const getContent = () => {
    let start = 2;
    let limit = nbrPages;

    const content = [];

    if (currentPage < 10 || nbrPages === 10) {
      // Page 1 is displayed
      console.log(query);
      content[1] = (
        <Link
          className={classNames({
            active: query.page === undefined || query.page === '1',
          })}
          key={1}
          to={getPageLink(1)}
        >
        1
        </Link>
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
        <ActiveLink key={i} to={getPageLink(i)}>
          {i}
        </ActiveLink>
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

Pagination.propTypes = {
  baseLink: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  nbrPages: PropTypes.number.isRequired,
  router: PropTypes.shape({
    location: PropTypes.shape({
      query: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withRouter(Pagination);

