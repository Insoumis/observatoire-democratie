import React from 'react';
import PropTypes from 'prop-types';

import css from './DeputeVotes.scss';

const DeputeKeyVote = ({ vote }) => {
  let result;
  switch (vote.vote_position) {
    case 'pour':
      result = (
        <div>
          <span className={css.pour}><i className="fa fa-thumbs-up" /> Pour</span> {vote.nom} (n°{vote.num})
        </div>
      );
      break;
    case 'contre':
      result = (
        <div>
          <span className={css.contre}><i className="fa fa-thumbs-down" /> Contre</span> {vote.nom} (n°{vote.num})
        </div>
      );
      break;
    case 'abstention':
      result = (
        <div>
          <span className={css.abstention}><i className="fa fa-microphone-slash" /> Abstention</span> sur {vote.nom} (n°{vote.num})
        </div>
      );
      break;
    case 'absent':
      result = (
        <div>
          <span className={css.absent}><i className="fa fa-question" /> Absent</span> sur {vote.nom} (n°{vote.num})
        </div>
      );
      break;
    default:
      break;
  }

  return (
    <div>
      <h4>{vote.scrutin_dossierLibelle}</h4>
      {result}
      <p>
        {vote.desc}<br />
        <i className="fa fa-arrow-circle-o-right" />{' '}
        <a href={vote.lien} target="_blank">Voir les résultats du vote</a>
      </p>
    </div>
  );
};

DeputeKeyVote.propTypes = {
  vote: PropTypes.shape({
    vote_position: PropTypes.string.isRequired,
  }).isRequired,
};

export default DeputeKeyVote;
