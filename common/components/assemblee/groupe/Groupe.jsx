import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

import RequestError from 'components/reusable/RequestError';
import Spinner from 'components/reusable/Spinner';
import ActiveLink from 'components/reusable/ActiveLink';

import css from './Groupe.scss';

const Groupe = ({ children, error, fetchGroupe, groupe }) => {
  if (error) {
    return <RequestError retry={fetchGroupe} />;
  }

  if (!groupe || !groupe.groupe_nuages) {
    return <Spinner />;
  }

  return (
    <div className={`container ${css.module}`}>
      <Helmet>
        <title>{groupe.groupe_libelle}</title>
        <meta property="og:title" content={`${groupe.groupe_libelle} | Observatoire de la Démocratie`} />
      </Helmet>

      <div className={css.header}>
        <h1>{groupe.groupe_libelle} ({groupe.groupe_abrev})</h1>
        <div>
          <Link to={`/assemblee/deputes/recherche?groupe=${groupe.groupe_abrev}`}>
            <i className="fa fa-group fa-fw" /> {groupe.groupe_nbmembres} membres
          </Link><br />
          <Link to={`/assemblee/deputes/${groupe.president.depute_shortid}`}>
            <i className="fa fa-bookmark fa-fw" /> Président : {groupe.president.depute_nom}
          </Link>
        </div>
      </div>

      <div className={css.content}>
        <nav>
          <ActiveLink to={`/assemblee/groupes/${groupe.groupe_abrev}/votes`}>Scrutins publics</ActiveLink>
          <ActiveLink to={`/assemblee/groupes/${groupe.groupe_abrev}/participations`}>Participations</ActiveLink>
          <ActiveLink to={`/assemblee/groupes/${groupe.groupe_abrev}/informations`}>Informations</ActiveLink>
        </nav>

        {React.cloneElement(children, { groupe })}
      </div>
    </div>
  );
};

Groupe.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.bool.isRequired,
  fetchGroupe: PropTypes.func.isRequired,
  groupe: PropTypes.shape({}),
};

Groupe.defaultProps = { groupe: undefined };

export default Groupe;
