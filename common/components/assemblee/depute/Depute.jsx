import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

import RequestError from 'components/reusable/RequestError';
import Spinner from 'components/reusable/Spinner';
import ActiveLink from 'components/reusable/ActiveLink';
import Share from './DeputeShare';

import css from './Depute.scss';

const Depute = ({ children, depute, error, fetchDepute }) => {
  if (error) {
    return <RequestError retry={fetchDepute} />;
  }

  if (!depute || !depute.votes_cles) {
    return <Spinner />;
  }

  const contactIco = {
    mail: <i className="fa fa-envelope" />,
    site: <i className="fa fa-globe" />,
    facebook: <i className="fa fa-facebook-square" />,
    twitter: <i className="fa fa-twitter" />,
  };

  return (
    <div className={`container ${css.module}`}>
      <Helmet>
        <title>{depute.depute_nom}</title>
        <meta property="og:title" content={`${depute.depute_nom} | Observatoire de la Démocratie`} />
        <meta property="og:image" content={`${API_URL}/visuels/obs2?depute=${depute.id}`} />
      </Helmet>

      <div className={css.header}>
        <div className={css.photo}>
          <img src={depute.depute_photo_an} alt="député" />
        </div>

        <div className={css.infos}>
          <header>
            <h2><span>{depute.depute_circo_complet}</span></h2>
            <h1>{depute.depute_nom}</h1>
          </header>
          <div className={css.contacts}>
            {depute.depute_contacts.map(contact => (
              <a href={contact.lien} key={contact.lien} target="_blank">
                {contactIco[contact.type]}
              </a>
            ))}
          </div>
          <div className={css.data}>
            {(depute.groupe_abrev !== 'NI') ?
              <Link to={`/assemblee/groupes/${depute.groupe_abrev}`}>
                <i className="fa fa-group" /> {depute.groupe_libelle} ({depute.groupe_abrev})
              </Link>
              :
              <div>
                <i className="fa fa-group" /> {depute.groupe_libelle} ({depute.groupe_abrev})
              </div>
            }
            <div>
              <i className="fa fa-briefcase" aria-hidden="true" />
              {' '}
              {depute.depute_profession || depute.depute_csp}
            </div>
            <div>
              <i className="fa fa-birthday-cake" aria-hidden="true" /> {depute.depute_naissance}
            </div>
            <div>
              <i className="fa fa-calendar" aria-hidden="true" /> Début de mandat : {depute.depute_mandat_debut}
              {(depute.depute_mandat_fin) ?
                ` | Fin de mandat : ${depute.depute_mandat_fin} (${depute.depute_mandat_fin_cause})`
                :
                false
              }
            </div>
          </div>
        </div>

        <Share depute={depute} />
      </div>

      <div className={css.content}>
        <nav>
          <ActiveLink to={`/assemblee/deputes/${depute.id}/votes`}>Scrutins publics</ActiveLink>
          <ActiveLink to={`/assemblee/deputes/${depute.id}/participations`}>Participations</ActiveLink>
          <ActiveLink to={`/assemblee/deputes/${depute.id}/informations`}>Informations</ActiveLink>
        </nav>

        {React.cloneElement(children, { depute })}
      </div>
    </div>
  );
};

Depute.propTypes = {
  children: PropTypes.node.isRequired,
  depute: PropTypes.shape({}),
  error: PropTypes.bool.isRequired,
  fetchDepute: PropTypes.func.isRequired,
};

Depute.defaultProps = { depute: undefined };

export default Depute;
