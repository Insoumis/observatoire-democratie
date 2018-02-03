import React from 'react';
import PropTypes from 'prop-types';

import { parseHTML } from 'utility';

import List from 'components/reusable/List';
import Form from './DeputeVoteForm';

import css from './DeputeVoteSearch.scss';

const getResult = (vote) => {
  switch (vote.vote_position) {
    case 'pour':
      return (
        <div>
          <span className={css.pour}><i className="fa fa-check fa-fw" /> Pour</span> le scrutin n°{vote.scrutin_num} du {vote.scrutin_date}
        </div>
      );
    case 'contre':
      return (
        <div>
          <span className={css.contre}><i className="fa fa-times fa-fw" /> Contre</span> le scrutin n°{vote.scrutin_num} du {vote.scrutin_date}
        </div>
      );
    case 'abstention':
      return (
        <div>
          <span className={css.abstention}><i className="fa fa-ban fa-fw" /> Abstention</span> sur le scrutin n°{vote.scrutin_num} du {vote.scrutin_date}
        </div>
      );
    case 'absent':
      return (
        <div>
          <span className={css.absent}><i className="fa fa-question fa-fw" /> Absent</span> au scrutin n°{vote.scrutin_num} du {vote.scrutin_date}
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

const DeputeVoteSearch = ({ deputeVotes, fetchVotes, router }) => (
  <div className={css.module}>
    <Form router={router} />


    <List
      baseLink={router.location.pathname}
      error={deputeVotes.error}
      isPending={deputeVotes.isPending}
      list={deputeVotes.votes.map(vote => (
        <article className={css.listItem} key={vote.scrutin_num}>
          <h3>
            {vote.scrutin_dossierLibelle} - {vote.scrutin_typedetail}
          </h3>
          {getResult(vote)}
          <p>
            {parseHTML(vote.scrutin_desc, true)}<br />
            <i className="fa fa-arrow-circle-o-right" />{' '}
            <a href={getLink(vote.scrutin_id)} target="_blank">Voir les résultats du vote</a>
          </p>
        </article>
      ))}
      pagination={deputeVotes.pagination}
      refetch={fetchVotes}
    />
  </div>
);

DeputeVoteSearch.propTypes = {
  deputeVotes: PropTypes.shape({}).isRequired,
  fetchVotes: PropTypes.func.isRequired,
  router: PropTypes.shape({}).isRequired,
};

export default DeputeVoteSearch;
