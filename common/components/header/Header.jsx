import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router';
import classNames from 'classnames';

import ActiveLink from 'components/reusable/ActiveLink';

import css from './Header.scss';

const Header = ({ location }) => (
  <div className={css.module}>
    <nav>
      <Link title="Accueil" to="/">
        <h1>Observatoire de la Démocratie</h1>
      </Link>
      {/* <ul>
        <li>Programme Présidentiel</li>
        <li>Gouvernement</li>
        <li>Assemblée Nationale</li>
      </ul> */}
    </nav>
    <header className={classNames({
      [css.noHome]: location.pathname !== '/',
    })}
    >
      <div />
    </header>
    <nav>
      <ul>
        <li>
          <ActiveLink to="/" onlyActiveOnIndex>
            <i className="fa fa-home" aria-hidden="true" /> Accueil
          </ActiveLink>
        </li>
        {/* <li>
          <ActiveLink to="/assemblee/groupes">
            <i className="fa fa-group" aria-hidden="true" /> Groupes
          </ActiveLink>
        </li> */}
        <li>
          <ActiveLink to="/assemblee/deputes/recherche">
            <i className="fa fa-user-circle-o" aria-hidden="true" /> Député&middot;e&middot;s
          </ActiveLink>
        </li>
        <li>
          <ActiveLink to="/assemblee/deputes/classement">
            <i className="fa fa-bar-chart" aria-hidden="true" /> Tops / Flops
          </ActiveLink>
        </li>
      </ul>
    </nav>
  </div>
);

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Header);
