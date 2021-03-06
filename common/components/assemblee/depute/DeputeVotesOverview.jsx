import React from 'react';
import PropTypes from 'prop-types';

import { formatNbr } from 'utility';

import Gauge from 'components/assemblee/reusable/Gauge';

import css from './DeputeVotesOverview.scss';

const DeputeVotesOverview = ({ depute }) => (
  <div>
    <h2>Votes aux scrutins publics</h2>
    <div className={css.stats}>
      <div>
        <div>
          <h3>Participation</h3>
          <Gauge
            picto="participation"
            number={formatNbr(depute.stats.positions.exprimes)}
          />
        </div>
        <div>
          <h3>Contre son groupe</h3>
          {(depute.groupe_abrev === 'NI') ?
            <div className={css.notAvailable}>Non disponible</div>
            :
            <Gauge
              picto="dissidence"
              number={formatNbr(depute.stats.positions.dissidence)}
            />
          }
        </div>
      </div>
      <div>
        <div>
          <h3>Vote pour</h3>
          <Gauge
            picto="pour"
            color="#25a87e"
            number={formatNbr(depute.stats.positions.pour)}
          />
        </div>
        <div>
          <h3>Vote contre</h3>
          <Gauge
            picto="contre"
            color="#E23D21"
            number={formatNbr(depute.stats.positions.contre)}
          />
        </div>
        <div>
          <h3>Abstention</h3>
          <Gauge
            picto="abstention"
            color="#213558"
            number={formatNbr(depute.stats.positions.abstention)}
          />
        </div>
      </div>
    </div>
  </div>
);

DeputeVotesOverview.propTypes = { depute: PropTypes.shape({}) };

DeputeVotesOverview.defaultProps = { depute: {} };

export default DeputeVotesOverview;
