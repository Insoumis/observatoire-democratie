import React from 'react';
import PropTypes from 'prop-types';

import DeputeGauge from './DeputeGauge';
import DeputeKeyVote from './DeputeKeyVote';

import css from './DeputeVotes.scss';

const DeputeVotes = ({ depute }) => {
  return (
    <div className={css.module}>
      <h2>Votes aux scrutins publics</h2>
      <div className={css.stats}>
        <div>
          <h3>Participation</h3>
          <DeputeGauge
            picto="participation"
            number={Math.ceil(depute.stats.positions.exprimes)}
            unit="%"
          />
        </div>
        <div>
          <h3>Absence</h3>
          <DeputeGauge
            number={Math.ceil(depute.stats.positions.absent)}
            unit="%"
          />
        </div>
        <div>
          <h3>Contre son groupe</h3>
          <DeputeGauge
            picto="dissidence"
            number={Math.ceil(depute.stats.positions.dissidence)}
            unit="%"
          />
        </div>
        <div>
          <h3>Vote pour</h3>
          <DeputeGauge
            color="#25a87e"
            number={Math.ceil(depute.stats.positions.pour)}
            unit="%"
          />
        </div>
        <div>
          <h3>Vote contre</h3>
          <DeputeGauge
            color="#E23D21"
            number={Math.ceil(depute.stats.positions.contre)}
            unit="%"
          />
        </div>
        <div>
          <h3>Abstention</h3>
          <DeputeGauge
            color="#213558"
            number={Math.ceil(depute.stats.positions.abstention)}
            unit="%"
          />
        </div>
      </div>

      <h2>Les votes clés</h2>
      <div>
        {Object.keys(depute.votes_cles).map(cat => (
          <div>
            <h3>{cat}</h3>
            {depute.votes_cles[cat].map(vote => (
              <DeputeKeyVote vote={vote} />
            ))}
          </div>
        ))}
      </div>

      <h2>Tous les votes</h2>
    </div>
  );
};

DeputeVotes.propTypes = { depute: PropTypes.shape({}) };

DeputeVotes.defaultProps = { depute: {} };

export default DeputeVotes;
