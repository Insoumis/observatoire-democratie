import React from 'react';
import PropTypes from 'prop-types';

import { formatNbr } from 'utility';

import DeputeVotesList from 'containers/assemblee/DeputeVotesList';
import DeputeGauge from './DeputeGauge';
import DeputeKeyVoteList from './DeputeKeyVoteList';
import DeputeVotesForm from './DeputeVotesForm';

import css from './DeputeVotes.scss';

const DeputeVotes = ({ depute }) => {
  if (depute.id === 'francoisderugy') {
    return (
      <div>
        {depute.depute_bureau}
      </div>
    );
  }

  return (
    <div className={css.module}>
      <h2>Votes aux scrutins publics</h2>
      <div className={css.stats}>
        <div>
          <h3>Participation</h3>
          <DeputeGauge
            picto="participation"
            number={formatNbr(depute.stats.positions.exprimes)}
          />
        </div>
        <div>
          <h3>Absence</h3>
          <DeputeGauge
            picto="absent"
            number={formatNbr(depute.stats.positions.absent)}
          />
        </div>
        <div>
          <h3>Contre son groupe</h3>
          {(depute.groupe_abrev === 'NI') ?
            <div className={css.notAvailable}>Non disponible</div>
            :
            <DeputeGauge
              picto="dissidence"
              number={formatNbr(depute.stats.positions.dissidence)}
            />
          }
        </div>
        <div>
          <h3>Vote pour</h3>
          <DeputeGauge
            picto="pour"
            color="#25a87e"
            number={formatNbr(depute.stats.positions.pour)}
          />
        </div>
        <div>
          <h3>Vote contre</h3>
          <DeputeGauge
            picto="contre"
            color="#E23D21"
            number={formatNbr(depute.stats.positions.contre)}
          />
        </div>
        <div>
          <h3>Abstention</h3>
          <DeputeGauge
            picto="abstention"
            color="#213558"
            number={formatNbr(depute.stats.positions.abstention)}
          />
        </div>
      </div>

      <h2>Les votes clés</h2>
      <DeputeKeyVoteList keyVotes={depute.votes_cles} />

      <h2>Tous les votes</h2>
      <div className={css.votesList}>
        <DeputeVotesForm />
        <DeputeVotesList deputeId={depute.id} />
      </div>
    </div>
  );
};

DeputeVotes.propTypes = { depute: PropTypes.shape({}) };

DeputeVotes.defaultProps = { depute: {} };

export default DeputeVotes;
