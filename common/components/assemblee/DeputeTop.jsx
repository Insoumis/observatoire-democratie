import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import TopForm from './DeputeTopForm';
import DeputeList from './DeputeList';
import DeputeTopListItem from './DeputeTopListItem';

import css from './DeputeTop.scss';

const DeputeTop = ({ deputeTop, fetchDeputeTop, router }) => {
  const topInit = router.location.query;
  delete topInit.page;

  return (
    <div className={`container ${css.module}`}>
      <Helmet>
        <title>Top députés</title>
      </Helmet>

      <TopForm
        initialValues={topInit}
        router={router}
      />

      <DeputeList
        deputes={deputeTop.deputes}
        error={deputeTop.error}
        isPending={deputeTop.isPending}
        ListItem={DeputeTopListItem}
        pagination={deputeTop.pagination}
        refetch={fetchDeputeTop}
      />
    </div>
  );
};

DeputeTop.propTypes = {
  deputeTop: PropTypes.shape({
    deputes: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
    isPending: PropTypes.bool.isRequired,
    pagination: PropTypes.shape({}).isRequired,
  }).isRequired,
  fetchDeputeTop: PropTypes.func.isRequired,
  router: PropTypes.shape({
    location: PropTypes.shape({
      query: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
};

export default DeputeTop;
