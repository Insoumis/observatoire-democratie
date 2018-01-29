import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import List from 'components/reusable/List';
import DeputeSearchForm from './DeputeSearchForm';
import DeputeSearchListItem from './DeputeSearchListItem';

import css from './DeputeSearch.scss';

const DeputeSearch = ({ deputeSearch, fetchDeputeSearch, router }) => (
  <div className={`container ${css.module}`}>
    <Helmet>
      <title>Les députés</title>
      <meta property="og:title" content="Les députés | Observatoire de la Démocratie" />
    </Helmet>

    <DeputeSearchForm
      initialValues={router.location.query}
      router={router}
    />

    <List
      baseLink="/assemblee/deputes/recherche"
      error={deputeSearch.error}
      isPending={deputeSearch.isPending}
      list={
        <ul>
          {deputeSearch.deputes.map(depute => (
            <DeputeSearchListItem depute={depute} key={depute.id} />
          ))}
        </ul>
      }
      pagination={deputeSearch.pagination}
      refetch={fetchDeputeSearch}
    />
  </div>
);

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
