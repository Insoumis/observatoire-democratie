import React from 'react';
import PropTypes from 'prop-types';

import { formatNbr } from 'utility';

import WordsMap from 'components/reusable/WordsMap';
import AnimatedNumber from 'components/reusable/AnimatedNumber';
import DeputeInterventionsSearch from 'containers/assemblee/DeputeInterventionsSearch';
import Gauge from 'components/assemblee/reusable/Gauge';

import css from './DeputeParticipations.scss';

const DeputeParticipations = ({ depute }) => (
  <div>
    <h2>Ses participations en chiffres</h2>
    {(depute.id !== 'francoisderugy') ?
      <div className={css.stats}>
        <div>
          <h3>Présence en commission</h3>
          <Gauge
            picto="commission"
            number={formatNbr(depute.stats.commissions.present)}
          />
        </div>
        <div>
          <h3>Absence en commission</h3>
          <Gauge
            picto="absent"
            number={formatNbr(depute.stats.commissions.absent)}
          />
          <p>+ <strong>{formatNbr(depute.stats.commissions.excuse)}%</strong> excusées</p>
        </div>
      </div>
      :
      false
    }
    <div className={css.numbers}>
      {(depute.id !== 'francoisderugy') ?
        <div>
          <h3>Amendements rédigés</h3>
          <strong><AnimatedNumber value={depute.stats.amendements.rediges} /></strong>
          <p>
            <strong>{depute.stats.amendements.adoptes || 0}%</strong> adopté
            {(depute.stats.amendements.adoptes > 1) ? 's' : ''}
          </p>
        </div>
        :
        false
      }
      <div>
        <h3>Nombre d&apos;interventions</h3>
        <strong><AnimatedNumber value={depute.stats.nbitvs} /></strong>
      </div>
      <div>
        <h3>Nombre de mots</h3>
        <strong><AnimatedNumber value={depute.stats.nbmots} /></strong>
      </div>
    </div>

    {(depute.depute_nuages.noms) ?
      <div>
        <h2>Ses mots</h2>
        <div className={css.wordCloud}>
          <WordsMap words={depute.depute_nuages.noms} />
        </div>
      </div>
      :
      false
    }

    {(depute.depute_nuages.verbes) ?
      <div>
        <h2>Ses verbes</h2>
        <div className={css.wordCloud}>
          <WordsMap words={depute.depute_nuages.verbes} />
        </div>
      </div>
      :
      false
    }

    <h2>Ses interventions</h2>
    <div className={css.interventions}>
      <DeputeInterventionsSearch deputeId={depute.id} />
    </div>
  </div>
);

DeputeParticipations.propTypes = { depute: PropTypes.shape({}) };

DeputeParticipations.defaultProps = { depute: {} };

export default DeputeParticipations;
