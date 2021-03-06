import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { groupesTri } from 'utility';

import List from 'components/reusable/List';
import GroupeRankingForm from './GroupeRankingForm';
import GroupeRankingListItem from './GroupeRankingListItem';

import css from './GroupeRanking.scss';

const GroupeRanking = ({ groupeRanking, fetchGroupeRanking, router }) => (
  <div className={`container ${css.module}`}>
    <Helmet>
      <title>Les groupes parlementaires</title>
      <meta property="og:title" content="Les groupes parlementaires | Observatoire de la Démocratie" />
    </Helmet>

    <GroupeRankingForm
      initialValues={{
        ...router.location.query,
        tri: router.location.query.tri || groupesTri[0].value,
        ordre: router.location.query.ordre || 'desc',
      }}
      router={router}
    />

    <List
      baseLink="/assemblee/groupes"
      error={groupeRanking.error}
      isPending={groupeRanking.isPending}
      list={
        <ul>
          {groupeRanking.groupes.map(groupe => (
            <GroupeRankingListItem groupe={groupe} key={groupe.groupe_abrev} />
          ))}
        </ul>
      }
      pagination={groupeRanking.pagination}
      refetch={fetchGroupeRanking}
    />
  </div>
);

GroupeRanking.propTypes = {
  groupeRanking: PropTypes.shape({
    groupes: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
    isPending: PropTypes.bool.isRequired,
    pagination: PropTypes.shape({}).isRequired,
  }).isRequired,
  fetchGroupeRanking: PropTypes.func.isRequired,
  router: PropTypes.shape({
    location: PropTypes.shape({
      query: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
};

export default GroupeRanking;
