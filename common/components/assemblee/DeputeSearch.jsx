import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import SearchForm from './DeputeSearchForm';
import DeputeList from './DeputeList';
import DeputeSearchListItem from './DeputeSearchListItem';

import css from './DeputeSearch.scss';

const DeputeSearch = ({ deputeSearch, fetchDeputeSearch, router }) => {
  const searchInit = router.location.query;
  delete searchInit.page;

  return (
    <div className={`container ${css.module}`}>
      <Helmet>
        <title>Les députés</title>
      </Helmet>

      <SearchForm
        initialValues={searchInit}
        router={router}
      />

      <DeputeList
        deputes={deputeSearch.deputes}
        error={deputeSearch.error}
        isPending={deputeSearch.isPending}
        ListItem={DeputeSearchListItem}
        pagination={deputeSearch.pagination}
        refetch={fetchDeputeSearch}
      />
    </div>
  );
};

DeputeSearch.propTypes = {
  deputeSearch: PropTypes.shape({
    deputes: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
    isPending: PropTypes.bool.isRequired,
    pagination: PropTypes.shape({}).isRequired,
  }).isRequired,
  fetchDeputeSearch: PropTypes.func.isRequired,
  router: PropTypes.shape({
    location: PropTypes.shape({
      query: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
};

export default DeputeSearch;
