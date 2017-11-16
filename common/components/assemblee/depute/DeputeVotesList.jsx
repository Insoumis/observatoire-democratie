import React from 'react';
import PropTypes from 'prop-types';

import { parseHTML } from 'utility';

import Spinner from 'components/reusable/Spinner';
import RequestError from 'components/reusable/RequestError';
import ActionPagination from 'components/reusable/ActionPagination';

import css from './DeputeVotes.scss';

const DeputeVotesList = ({ error, isPending, newSearch, pagination, refetch, search, votes }) => {
  if (isPending) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div>
        <RequestError retry={refetch} />
      </div>
    );
  }

  const getResult = (vote) => {
    switch (vote.vote_position) {
      case 'pour':
        return (
          <div>
            <span className={css.pour}><i className="fa fa-thumbs-up" /> Pour</span> le scrutin n°{vote.scrutin_num} du {vote.scrutin_date}
          </div>
        );
      case 'contre':
        return (
          <div>
            <span className={css.contre}><i className="fa fa-thumbs-down" /> Contre</span> le scrutin n°{vote.scrutin_num} du {vote.scrutin_date}
          </div>
        );
      case 'abstention':
        return (
          <div>
            <span className={css.abstention}><i className="fa fa-microphone-slash" /> Abstention</span> sur le scrutin n°{vote.scrutin_num} du {vote.scrutin_date}
          </div>
        );
      case 'absent':
        return (
          <div>
            <span className={css.absent}><i className="fa fa-question" /> Absent</span> au scrutin n°{vote.scrutin_num} du {vote.scrutin_date}
          </div>
        );
      default:
        return false;
    }
  };

  const getLink = (scrutinId) => {
    const ref = scrutinId.split('_');
    return `http://www2.assemblee-nationale.fr/scrutins/detail/(legislature)/${ref[0]}/(num)/${ref[1]}`;
  };

  return (
    <div>
      <div className={css.count}>
        {pagination.totalItems} scrutin
        {(pagination.totalItems > 1) ? 's' : ''}
      </div>
      <ul>
        {votes.map(vote => (
          <li key={vote.scrutin_num}>
            <h3>
              {vote.scrutin_dossierLibelle} - {vote.scrutin_typedetail}
            </h3>
            {getResult(vote)}
            <p>
              {parseHTML(vote.scrutin_desc)}<br />
              <i className="fa fa-arrow-circle-o-right" />{' '}
              <a href={getLink(vote.scrutin_id)} target="_blank">Voir les résultats du vote</a>
            </p>
          </li>
        ))}
      </ul>
      {(pagination.nbrPages > 1) ?
        <ActionPagination
          action={newSearch}
          currentPage={pagination.currentPage}
          currentQuery={search}
          nbrPages={pagination.nbrPages}
        />
        :
        false
      }
    </div>
  );
};

DeputeVotesList.propTypes = {
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  isPending: PropTypes.bool.isRequired,
  newSearch: PropTypes.func.isRequired,
  pagination: PropTypes.shape({}).isRequired,
  refetch: PropTypes.func.isRequired,
  search: PropTypes.shape({}).isRequired,
  votes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DeputeVotesList;
