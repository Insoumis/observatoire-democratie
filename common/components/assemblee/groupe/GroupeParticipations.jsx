import React from 'react';
import PropTypes from 'prop-types';

import { formatNbr } from 'utility';

import Gauge from 'components/assemblee/reusable/Gauge';
import WordsMap from 'components/reusable/WordsMap';
import AnimatedNumber from 'components/reusable/AnimatedNumber';
import GroupeInterventionsSearch from 'containers/assemblee/GroupeInterventionsSearch';

import css from './GroupeParticipations.scss';

const GroupeParticipations = ({ groupe }) => (
  <div>
    <h2>Les participations en chiffres</h2>
    <div className={css.stats}>
      <div>
        <h3>Présence en commission</h3>
        <Gauge
          picto="commission"
          number={formatNbr(groupe.stats.commissions.toutes.present)}
        />
      </div>
      <div>
        <h3>Absence en commission</h3>
        <Gauge
          picto="absent"
          number={formatNbr(groupe.stats.commissions.toutes.absent)}
        />
        <p>+ <strong>{formatNbr(groupe.stats.commissions.toutes.excuse)}%</strong> excusées</p>
      </div>
    </div>
    <div className={css.numbers}>
      <div>
        <h3>Amendements rédigés</h3>
        <strong><AnimatedNumber value={groupe.stats.amendements.rediges} /></strong>
        <p>
          <strong>
            {formatNbr(groupe.stats.amendements.rediges_depute) || 0}
          </strong> en moyenne par député
        </p>
        <p>
          <strong>{groupe.stats.amendements.adoptes || 0}%</strong> adopté
          {(groupe.stats.amendements.adoptes > 1) ? 's' : ''}
        </p>
      </div>
      <div>
        <h3>Nombre d&apos;interventions</h3>
        <strong><AnimatedNumber value={groupe.stats.nbitvs} /></strong>
        <p>
          <strong>{formatNbr(groupe.stats.nbitvs_depute) || 0}</strong> en moyenne par député
        </p>
      </div>
      <div>
        <h3>Nombre de mots</h3>
        <strong><AnimatedNumber value={groupe.stats.nbmots} /></strong>
        <p>
          <strong>{formatNbr(groupe.stats.nbmots_depute) || 0}</strong> en moyenne par député
        </p>
      </div>
    </div>

    {(groupe.groupe_nuages.noms) ?
      <div>
        <h2>Les mots</h2>
        <div className={css.wordCloud}>
          <WordsMap words={groupe.groupe_nuages.noms} />
        </div>
      </div>
      :
      false
    }

    {(groupe.groupe_nuages.verbes) ?
      <div>
        <h2>Les verbes</h2>
        <div className={css.wordCloud}>
          <WordsMap words={groupe.groupe_nuages.verbes} />
        </div>
      </div>
      :
      false
    }

    <h2>Les interventions</h2>
    <div className={css.interventions}>
      <GroupeInterventionsSearch groupeId={groupe.groupe_abrev} />
    </div>
  </div>
);

GroupeParticipations.propTypes = { groupe: PropTypes.shape({}) };

GroupeParticipations.defaultProps = { groupe: {} };

export default GroupeParticipations;
