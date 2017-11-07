import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import DeputeRankingForm from './DeputeRankingForm';
import DeputeList from './DeputeList';
import DeputeRankingListItem from './DeputeRankingListItem';

import css from './DeputeRanking.scss';

const DeputeRanking = ({ deputeRanking, fetchDeputeRanking, router }) => {
  const rankInit = router.location.query;
  delete rankInit.page;

  return (
    <div className={`container ${css.module}`}>
      <Helmet>
        <title>Tops / Flops</title>
      </Helmet>

      <DeputeRankingForm
        initialValues={rankInit}
        router={router}
      />

      <DeputeList
        baseLink="/assemblee/deputes/ranking"
        deputes={deputeRanking.deputes}
        error={deputeRanking.error}
        isPending={deputeRanking.isPending}
        ListItem={DeputeRankingListItem}
        pagination={deputeRanking.pagination}
        refetch={fetchDeputeRanking}
      />
    </div>
  );
};

DeputeRanking.propTypes = {
  deputeRanking: PropTypes.shape({
    deputes: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
    isPending: PropTypes.bool.isRequired,
    pagination: PropTypes.shape({}).isRequired,
  }).isRequired,
  fetchDeputeRanking: PropTypes.func.isRequired,
  router: PropTypes.shape({
    location: PropTypes.shape({
      query: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
};

export default DeputeRanking;
