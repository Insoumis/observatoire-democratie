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
        <div>
          <span style={{ width: `${formatNbr(deputeResult)}%` }} />
          <span>{formatNbr(deputeResult, '0,0.0')}&nbsp;%</span>
        </div>
      </div>
      {election.adversaires.map((adversaire) => {
        const adversaireResult = (adversaire.voix / election.exprimes) * 100;
        return (
          <div key={adversaire.nom}>
            {adversaire.nom}
            <div>
              <span style={{ width: `${formatNbr(adversaireResult)}%` }} />
              <span>
                {formatNbr(adversaireResult, '0,0.0')} %
              </span>
            </div>
          </div>
        );
      })}

      <ul className="fa-ul">
        <li><i className="fa fa-li fa-dot-circle-o" />
          Élu·e au <strong>{election.tour}{election.tour > 1 ? 'ème' : 'er'} tour</strong>
        </li>
        <li>
          <i className="fa fa-li fa-dot-circle-o" /><strong>Inscrits :</strong> {formatNbr(election.inscrits)}
        </li>
        <li>
          <i className="fa fa-li fa-dot-circle-o" /><strong>Abstention :</strong> {formatNbr(election.abstentions)}
          {' '}
          (&nbsp;{formatNbr((election.abstentions / election.inscrits) * 100)}% des inscrits&nbsp;)
        </li>
        <li>
          <i className="fa fa-li fa-dot-circle-o" /><strong>Votants :</strong> {formatNbr(election.votants)}
          {' '}
          (&nbsp;{formatNbr((election.votants / election.inscrits) * 100)}% des inscrits&nbsp;)
        </li>
        <li>
          <i className="fa fa-li fa-dot-circle-o" /><strong>Exprimés :</strong> {formatNbr(election.exprimes)}
          {' '}
          (&nbsp;{formatNbr((election.exprimes / election.votants) * 100)}% des votants&nbsp;)
        </li>
        <li>
          <i className="fa fa-li fa-dot-circle-o" /><strong>Blancs :</strong> {formatNbr(election.blancs)}
          {' '}
          (&nbsp;{formatNbr((election.blancs / election.votants) * 100)}% des votants&nbsp;)
        </li>
        <li>
          <i className="fa fa-li fa-dot-circle-o" /><strong>Nuls :</strong> {formatNbr(election.nuls)}
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
