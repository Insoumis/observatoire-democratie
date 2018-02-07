import PropTypes from 'prop-types';
import React from 'react';

import ElectionGraph from './ElectionGraph';

import css from './Depute.scss';

const DeputeInfos = ({ depute }) => (
  <div className={css.subcontent}>
    {depute.depute_election &&
      <React.Fragment>
        <h2>Élection</h2>
        <div>
          <ElectionGraph depute={depute} />
        </div>
      </React.Fragment>
    }

    <h2>Mandats et fonctions</h2>
    <div>
      {(depute.depute_bureau) ?
        <div>
          <h3>Bureau</h3>
          <ul className="fa-ul">
            <li><i className="fa fa-li fa-dot-circle-o" /> {depute.depute_bureau}</li>
          </ul>
        </div>
        :
        false
      }

      {(depute.depute_mandats.commissions && depute.depute_mandats.commissions.length) ?
        <div>
          <h3>Commission</h3>
          <ul className="fa-ul">
            {depute.depute_mandats.commissions.map(commission => (
              <li key={commission.nom}>
                <i className="fa fa-li fa-dot-circle-o" />
                <strong>{commission.qualite}</strong> : {commission.nom}
                <br />
                <a href={commission.lien} target="_blank">En savoir plus</a>
              </li>
            ))}
          </ul>
        </div>
        :
        false
      }

      {(
        Object.keys(depute.depute_mandats).length &&
        (depute.depute_mandats.delegations_bureau.length ||
        depute.depute_mandats.delegations_office.length)
      ) ?
        <div>
          <h3>Délégation</h3>
          <ul className="fa-ul">
            {depute.depute_mandats.delegations_bureau.map(delegation => (
              <li key={delegation.nom}>
                <i className="fa fa-li fa-dot-circle-o" />
                <strong>{delegation.qualite}</strong> - {delegation.nom}
                <br />
                <a href={delegation.lien} target="_blank">En savoir plus</a>
              </li>
            ))}
            {depute.depute_mandats.delegations_office.map(delegation => (
              <li key={delegation.id}>
                <i className="fa fa-li fa-dot-circle-o" />
                <strong>{delegation.qualite}</strong> - {delegation.nom}
                <br />
                <a href={delegation.lien} target="_blank">En savoir plus</a>
              </li>
            ))}
          </ul>
        </div>
        :
        false
      }

      {(depute.depute_autresmandats && depute.depute_autresmandats.length) ?
        <div>
          <h3>Autres mandats</h3>
          <ul className="fa-ul">
            {depute.depute_autresmandats.map(mandat => (
              <li key={mandat}><i className="fa fa-li fa-dot-circle-o" /> {mandat}</li>
            ))}
          </ul>
        </div>
        :
        false
      }
    </div>

    {(depute.depute_suppleant) ?
      <React.Fragment>
        <h2>Équipe</h2>
        <div>
          <h3>Suppléant·e :</h3>
          <ul className="fa-ul">
            <li><i className="fa fa-li fa-dot-circle-o" /> {depute.depute_suppleant}</li>
          </ul>
          {(depute.depute_collaborateurs) ?
            <div>
              <h3>Collaborateur·trice·s :</h3>
              <ul className="fa-ul">
                {depute.depute_collaborateurs.map(collab => (
                  <li key={collab}><i className="fa fa-li fa-dot-circle-o" /> {collab}</li>
                ))}
              </ul>
            </div>
            :
            false
          }
        </div>
      </React.Fragment>
      :
      false
      }

    <h2>Autre</h2>
    <div>
      {(depute.depute_hatvp.length) ?
        <p>
          <strong>Déclaration HATVP :</strong>
          {' '}
          <a href={depute.depute_hatvp[0].docurl} target="_blank">
            Voir la fiche
          </a>
        </p>
        :
        false
      }
      <p>
        <strong>Page sur le site de l&apos;Assemblée Nationale&nbsp;:</strong>
        {' '}
        <a href={`http://www2.assemblee-nationale.fr/deputes/fiche/OMC_${depute.depute_uid}`} target="_blank">
          Voir la page
        </a>
      </p>
    </div>
  </div>
);

DeputeInfos.propTypes = { depute: PropTypes.shape({}) };

DeputeInfos.defaultProps = { depute: {} };

export default DeputeInfos;
