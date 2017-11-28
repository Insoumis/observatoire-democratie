import React from 'react';
import PropTypes from 'prop-types';

import css from './DeputeVotes.scss';

const DeputeKeyVoteListItem = ({ vote }) => {
  let result;
  switch (vote.vote_position) {
    case 'pour':
      result = (
        <div>
          <span className={css.pour}><i className="fa fa-check" /> Pour</span> {vote.nom} (n°{vote.num})
        </div>
      );
      break;
    case 'contre':
      result = (
        <div>
          <span className={css.contre}><i className="fa fa-times" /> Contre</span> {vote.nom} (n°{vote.num})
        </div>
      );
      break;
    case 'abstention':
      result = (
        <div>
          <span className={css.abstention}><i className="fa fa-ban" /> Abstention</span> sur {vote.nom} (n°{vote.num})
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
      <h3>{vote.scrutin_dossierLibelle}</h3>
      {result}
      <p>
        {vote.desc}<br />
        <div>
          <i className="fa fa-university" />{' '}
          <a href={vote.lien_texte} target="_blank">Le texte à l&apos;Assemblée</a>
        </div>
        {(vote.lien_source) ?
          <div>
            <i className="fa fa-newspaper-o" />{' '}
            <a href={vote.lien_source} target="_blank">On en parle dans la presse</a>
          </div>
          :
          false
        }
        <div>
          <i className="fa fa-arrow-circle-o-right" />{' '}
          <a href={vote.lien} target="_blank">Voir les résultats du vote</a>
        </div>
      </p>
    </div>
  );
};

DeputeKeyVoteListItem.propTypes = {
  vote: PropTypes.shape({
    vote_position: PropTypes.string.isRequired,
  }).isRequired,
};

export default DeputeKeyVoteListItem;
