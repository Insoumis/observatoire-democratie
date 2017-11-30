import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import ActiveLink from 'components/reusable/ActiveLink';

import css from './About.scss';

const About = ({ children }) => (
  <div className={`container ${css.module}`}>
    <Helmet>
      <title>À propos</title>
      <meta property="og:title" content="À propos | Observatoire de la Démocratie" />
    </Helmet>

    <h1>L&apos;Observatoire de la <strong>Démocratie</strong> ?</h1>

    <div className={css.content}>
      <nav>
        <ActiveLink to="/assemblee/a-propos/informations">L&apos;initiative</ActiveLink>
        <ActiveLink to="/assemblee/a-propos/lexique">Lexique</ActiveLink>
        <ActiveLink to="/assemblee/a-propos/donnees">Calculs et données</ActiveLink>
        <ActiveLink to="/assemblee/a-propos/mentions-legales">Mentions légales</ActiveLink>
      </nav>

      {children}
    </div>
  </div>
);

About.propTypes = { children: PropTypes.node.isRequired };

export default About;
