import React from 'react';
import PropTypes from 'prop-types';

import { formatNbr } from 'utility';

import DeputeGauge from './DeputeGauge';

import css from './DeputeVotes.scss';

const DeputeVotes = ({ depute }) => {
  return (
    <div>
      <h2>Votes aux scrutins publics</h2>
      <div className={css.stats}>
        <div>
          <h3>Participation</h3>
          <DeputeGauge
            picto="participation"
            number={formatNbr(depute.stats.positions.exprimes)}
            unit="%"
          />
        </div>
        <div>
          <h3>Absence</h3>
          <DeputeGauge
            number={formatNbr(depute.stats.positions.absent)}
            unit="%"
          />
        </div>
        <div>
          <h3>Contre son groupe</h3>
          <DeputeGauge
            picto="dissidence"
            number={formatNbr(depute.stats.positions.dissidence)}
            unit="%"
          />
        </div>
        <div>
          <h3>Vote pour</h3>
          <DeputeGauge
            number={formatNbr(depute.stats.positions.pour)}
            unit="%"
          />
        </div>
        <div>
          <h3>Vote contre</h3>
          <DeputeGauge
            number={formatNbr(depute.stats.positions.contre)}
            unit="%"
          />
        </div>
        <div>
          <h3>Abstention</h3>
          <DeputeGauge
            number={formatNbr(depute.stats.positions.abstention)}
            unit="%"
          />
        </div>
      </div>
    </div>
  );
};

DeputeVotes.propTypes = { depute: PropTypes.shape({}) };

DeputeVotes.defaultProps = { depute: {} };

export default DeputeVotes;
