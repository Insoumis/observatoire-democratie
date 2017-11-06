import React from 'react';
import { Link } from 'react-router';

import ActiveLink from 'components/reusable/ActiveLink';

import css from './Header.scss';

const Header = () => (
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
    <header />
    <nav>
      <ul>
        <li>
          <ActiveLink to="/assemblee/groups">
            <i className="fa fa-group" aria-hidden="true" /> Groupes
          </ActiveLink>
        </li>
        <li>
          <ActiveLink to="/assemblee/deputes/search">
            <i className="fa fa-user-circle-o" aria-hidden="true" /> Députés
          </ActiveLink>
        </li>
        <li>
          <ActiveLink to="/assemblee/deputes/top">
            <i className="fa fa-bar-chart" aria-hidden="true" /> Top Députés
          </ActiveLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
