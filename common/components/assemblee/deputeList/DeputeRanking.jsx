import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { statsTri } from 'utility';

import DeputeRankingForm from './DeputeRankingForm';
import DeputeList from './DeputeList';
import DeputeRankingListItem from './DeputeRankingListItem';

import css from './DeputeRanking.scss';

const DeputeRanking = ({ deputeRanking, fetchDeputeRanking, router }) => (
  <div className={`container ${css.module}`}>
    <Helmet>
      <title>Tops / Flops</title>
      <meta property="og:title" content="Tops / Flops | Observatoire de la Démocratie" />
    </Helmet>

    <DeputeRankingForm
      initialValues={{
        ...router.location.query,
        tri: router.location.query.tri || statsTri[0].value,
        ordre: router.location.query.ordre || 'desc',
      }}
      router={router}
    />

    <DeputeList
      baseLink="/assemblee/deputes/classement"
      deputes={deputeRanking.deputes}
      error={deputeRanking.error}
      isPending={deputeRanking.isPending}
      ListItem={DeputeRankingListItem}
      pagination={deputeRanking.pagination}
      refetch={fetchDeputeRanking}
    />
  </div>
);

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
