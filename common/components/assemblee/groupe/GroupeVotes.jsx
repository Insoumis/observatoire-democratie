import React from 'react';
import PropTypes from 'prop-types';

import { formatNbr } from 'utility';

import Gauge from 'components/assemblee/reusable/Gauge';

import groupeCss from './Groupe.scss';
import css from './GroupeVotes.scss';

const GroupeVotes = ({ groupe }) => (
  <div className={`${groupeCss.subcontent} ${css.module}`}>
    <h2>Votes aux scrutins publics (moyenne)</h2>
    <div className={css.stats}>
      <div>
        <div>
          <h3>Participation</h3>
          <Gauge
            picto="participation"
            number={formatNbr(groupe.stats.positions.exprimes)}
          />
        </div>
        <div>
          <h3>Contre son groupe</h3>
          {(groupe.groupe_abrev === 'NI') ?
            <div className={css.notAvailable}>Non disponible</div>
            :
            <Gauge
              picto="dissidence"
              number={formatNbr(groupe.stats.positions.dissidence)}
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
            number={formatNbr(groupe.stats.positions.pour)}
          />
        </div>
        <div>
          <h3>Vote contre</h3>
          <Gauge
            picto="contre"
            color="#E23D21"
            number={formatNbr(groupe.stats.positions.contre)}
          />
        </div>
        <div>
          <h3>Abstention</h3>
          <Gauge
            picto="abstention"
            color="#213558"
            number={formatNbr(groupe.stats.positions.abstention)}
          />
        </div>
      </div>
    </div>
  </div>
);

GroupeVotes.propTypes = { groupe: PropTypes.shape({}) };

GroupeVotes.defaultProps = { groupe: {} };

export default GroupeVotes;
