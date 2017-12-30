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
            <i className="fa fa-question-circle fa-fw" /> Survolez le graphique pour plus de détails
          </div>
          <div className={css.sources}>
            <div>
              <i className="fa fa-university fa-fw" />{' '}
              <a href={vote.detail.lien_texte} target="_blank">Le texte à l&apos;Assemblée</a>
            </div>
            {(vote.detail.lien_source) ?
              <div>
                <i className="fa fa-newspaper-o fa-fw" />{' '}
                <a href={vote.detail.lien_source} target="_blank">On en parle dans la presse</a>
              </div>
              :
              false
            }
            <div>
              <i className="fa fa-arrow-circle-o-right fa-fw" />{' '}
              <a href={vote.detail.lien} target="_blank">Voir les résultats du vote</a>
            </div>
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
