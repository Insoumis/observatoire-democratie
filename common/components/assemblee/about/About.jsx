import React from 'react';
import PropTypes from 'prop-types';

import ActiveLink from 'components/reusable/ActiveLink';

import css from './About.scss';

const About = ({ children }) => (
  <div className={`container ${css.module}`}>
    <h1>L&apos;Observatoire de la <strong>Démocratie</strong> ?</h1>

    <div className={css.content}>
      <nav>
        <ActiveLink to="/assemblee/a-propos/informations">L&apos;initiative</ActiveLink>
        <ActiveLink to="/assemblee/a-propos/lexique">Lexique</ActiveLink>
        <ActiveLink to="/assemblee/a-propos/donnees">Calculs et données</ActiveLink>
      </nav>

      {children}
    </div>
  </div>
);

About.propTypes = { children: PropTypes.node.isRequired };

export default About;
