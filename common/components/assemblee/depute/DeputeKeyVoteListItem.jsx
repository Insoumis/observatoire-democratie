import React from 'react';
import PropTypes from 'prop-types';

import { parseHTML } from 'utility';

import css from './DeputeVotes.scss';

const DeputeKeyVoteListItem = ({ vote }) => {
  let result;
  switch (vote.vote_position) {
    case 'pour':
      result = (
        <div>
          <span className={css.pour}><i className="fa fa-check fa-fw" /> Pour</span> {vote.nom} (scrutin n°{vote.num} du {vote.scrutin_date})
        </div>
      );
      break;
    case 'contre':
      result = (
        <div>
          <span className={css.contre}><i className="fa fa-times fa-fw" /> Contre</span> {vote.nom} (scrutin n°{vote.num} du {vote.scrutin_date})
        </div>
      );
      break;
    case 'abstention':
      result = (
        <div>
          <span className={css.abstention}><i className="fa fa-ban fa-fw" /> Abstention</span> sur {vote.nom} (scrutin n°{vote.num} du {vote.scrutin_date})
        </div>
      );
      break;
    case 'absent':
      result = (
        <div>
          <span className={css.absent}><i className="fa fa-question fa-fw" /> Absent</span> sur {vote.nom} (scrutin n°{vote.num} du {vote.scrutin_date})
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
      <div className={css.content}>
        {parseHTML(vote.descfmt)}
        <div>
          <i className="fa fa-university fa-fw" />{' '}
          <a href={vote.lien_texte} target="_blank">Le texte à l&apos;Assemblée</a>
        </div>
        {(vote.lien_source) ?
          <div>
            <i className="fa fa-newspaper-o fa-fw" />{' '}
            <a href={vote.lien_source} target="_blank">On en parle dans la presse</a>
          </div>
          :
          false
        }
        <div>
          <i className="fa fa-arrow-circle-o-right fa-fw" />{' '}
          <a href={vote.lien} target="_blank">Voir les résultats du vote</a>
        </div>
      </div>
    </div>
  );
};

DeputeKeyVoteListItem.propTypes = {
  vote: PropTypes.shape({
    vote_position: PropTypes.string.isRequired,
  }).isRequired,
};

export default DeputeKeyVoteListItem;
