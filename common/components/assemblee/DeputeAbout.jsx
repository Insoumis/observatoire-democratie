import PropTypes from 'prop-types';
import React from 'react';

const DeputeAbout = ({ depute }) => (
  <div>
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

      {(depute.depute_mandats.commissions.length) ?
        <div>
          <h3>Commission</h3>
          <ul className="fa-ul">
            {depute.depute_mandats.commissions.map(commission => (
              <li>
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
        depute.depute_mandats.delegations_bureau.length
        || depute.depute_mandats.delegations_office.length
      ) ?
        <div>
          <h3>Délégation</h3>
          <ul className="fa-ul">
            {depute.depute_mandats.delegations_bureau.map(delegation => (
              <li>
                <i className="fa fa-li fa-dot-circle-o" />
                <strong>{delegation.qualite}</strong> - {delegation.nom}
                <br />
                <a href={delegation.lien} target="_blank">En savoir plus</a>
              </li>
            ))}
            {depute.depute_mandats.delegations_office.map(delegation => (
              <li>
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

      {(depute.depute_autresmandats) ?
        <div>
          <h3>Autres mandats</h3>
          <ul className="fa-ul">
            {depute.depute_autresmandats.map(mandat => (
              <li><i className="fa fa-li fa-dot-circle-o" /> {mandat}</li>
            ))}
          </ul>
        </div>
        :
        false
      }
    </div>

    <h2>Équipe</h2>
    <div>
      <h3>Suppléant·e :</h3>
      <ul className="fa-ul">
        <li><i className="fa fa-li fa-dot-circle-o" /> {depute.depute_suppleant}</li>
      </ul>
      <h3>Collaborateur·trice·s :</h3>
      <ul className="fa-ul">
        {depute.depute_collaborateurs.map(collab => (
          <li><i className="fa fa-li fa-dot-circle-o" /> {collab}</li>
        ))}
      </ul>
    </div>

    <h2>Autre</h2>
    <div>
      <p>
        <strong>Déclaration HATVP :</strong>
        {' '}
        <a href={depute.depute_hatvp[0].docurl} target="_blank">
          Voir la fiche
        </a>
      </p>
      <p>
        <strong>Page sur le site de l&apos;Assemblée Nationale :</strong>
        {' '}
        <a href={`http://www2.assemblee-nationale.fr/deputes/fiche/OMC_${depute.depute_uid}`}>
          Voir la page
        </a>
      </p>
    </div>
  </div>
);

DeputeAbout.propTypes = {
  depute: PropTypes.shape({}),
};

DeputeAbout.defaultProps = { depute: {} };

export default DeputeAbout;
