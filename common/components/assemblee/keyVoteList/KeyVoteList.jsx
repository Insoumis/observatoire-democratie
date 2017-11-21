import React from 'react';
import PropTypes from 'prop-types';

import Spinner from 'components/reusable/Spinner';
import RequestError from 'components/reusable/RequestError';
import KeyVoteGraph from './KeyVoteGraph';

import css from './KeyVoteList.scss';

const KeyVoteList = ({ keyVotes, refetch }) => {
  if (keyVotes === null) {
    return (
      <div className={css.whiteBlock}>
        <Spinner />
      </div>
    );
  }

  if (keyVotes === false) {
    return (
      <div className={css.retry}>
        <RequestError retry={refetch} />
      </div>
    );
  }

  return (
    <div className={css.module}>
      {keyVotes.map(vote => (
        <article key={vote.detail.num}>
          <h2><span>{vote.detail.theme}</span></h2>
          <h3>{vote.dossierLibelle}</h3>
          <h4>Vote pour {vote.detail.nom}</h4>
          <p>{vote.detail.desc}</p>
          <div className={css.graph}>
            <KeyVoteGraph data={vote.positions} />
          </div>
          <div className={css.disclaimer}>
            <i className="fa fa-question-circle" /> Survolez le graphique pour plus de détails
          </div>
        </article>
      ))}
    </div>
  );
};

KeyVoteList.propTypes = {
  keyVotes: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  refetch: PropTypes.func.isRequired,
};

KeyVoteList.defaultProps = { keyVotes: null };

export default KeyVoteList;
