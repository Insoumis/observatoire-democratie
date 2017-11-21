import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/header/Header';

import 'react-widgets/lib/scss/react-widgets.scss';

import test from './assets/test.jpg';
import './App.scss';

const App = ({ children }) => (
  <div>
    <Helmet
      defaultTitle="Observatoire de la Démocratie"
      titleTemplate="%s | Observatoire de la Démocratie"
    >
      <meta name="description" content="" />

      <meta property="og:title" content="Observatoire de la Démocratie" />
      <meta property="og:description" content="" />
      <meta property="og:image" content={`http://dev.observatoire-democratie.fr${test}`} />
      <meta property="og:url" content="http://dev.observatoire-democratie.fr" />
      <meta name="twitter:image:alt" content="Un outil simple pour comprendre une démocratie complexe." />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>

    <Header />

    {children}
  </div>
);

App.propTypes = { children: PropTypes.node.isRequired };

export default App;
