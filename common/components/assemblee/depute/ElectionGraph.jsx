import React from 'react';
import PropTypes from 'prop-types';

import { formatNbr } from 'utility';

import css from './ElectionGraph.scss';

const ElectionGraph = ({ depute }) => {
  const election = depute.depute_election;
  const deputeResult = (election.voix / election.exprimes) * 100;

  return (
    <div className={css.module}>
      <div>
        {depute.depute_nom} ({election.nuance})
        <span style={{ width: `${formatNbr(deputeResult)}%` }}>
          {formatNbr(deputeResult, '0,0.0')} %
        </span>
      </div>
      {election.adversaires.map((adversaire) => {
        const adversaireResult = (adversaire.voix / election.exprimes) * 100;
        return (
          <div>
            {adversaire.nom}
            <span style={{ width: `${formatNbr(adversaireResult)}%` }}>
              {formatNbr(adversaireResult, '0,0.0')} %
            </span>
          </div>
        );
      })}

      <ul className="fa-ul">
        <li><i className="fa fa-li fa-dot-circle-o" />
          Élu·e au <strong>{election.tour}{election.tour > 1 ? 'ème' : 'er'} tour</strong>
        </li>
        <li>
          <i className="fa fa-li fa-dot-circle-o" /><strong>Inscrits :</strong> {election.inscrits}
        </li>
        <li>
          <i className="fa fa-li fa-dot-circle-o" /><strong>Abstention :</strong> {election.abstentions}
          {' '}
          (&nbsp;{formatNbr((election.abstentions / election.inscrits) * 100)}% des inscrits&nbsp;)
        </li>
        <li>
          <i className="fa fa-li fa-dot-circle-o" /><strong>Votants :</strong> {election.votants}
          {' '}
          (&nbsp;{formatNbr((election.votants / election.inscrits) * 100)}% des inscrits&nbsp;)
        </li>
        <li>
          <i className="fa fa-li fa-dot-circle-o" /><strong>Exprimés :</strong> {election.exprimes}
          {' '}
          (&nbsp;{formatNbr((election.exprimes / election.votants) * 100)}% des votants&nbsp;)
        </li>
        <li>
          <i className="fa fa-li fa-dot-circle-o" /><strong>Blancs :</strong> {election.blancs}
          {' '}
          (&nbsp;{formatNbr((election.blancs / election.votants) * 100)}% des votants&nbsp;)
        </li>
        <li>
          <i className="fa fa-li fa-dot-circle-o" /><strong>Nuls :</strong> {election.nuls}
          {' '}
          (&nbsp;{formatNbr((election.nuls / election.votants) * 100)}% des votants&nbsp;)
        </li>
      </ul>
    </div>
  );
};

ElectionGraph.propTypes = {
  depute: PropTypes.shape({}).isRequired,
};

export default ElectionGraph;