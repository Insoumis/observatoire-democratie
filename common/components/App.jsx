import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/header/Header';

import 'react-widgets/lib/scss/react-widgets.scss';
import './App.scss';

const App = ({ children }) => (
  <div>
    <Helmet
      defaultTitle="Observatoire de la Démocratie"
      titleTemplate="%s | Observatoire de la Démocratie"
    >
      <meta name="description" content="" />
      <meta name="og:description" content="" />
      <meta name="og:image" content="" />
      <meta name="twitter:description" content="" />
      <meta name="twitter:image" content="" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>

    <Header />

    {children}
  </div>
);

App.propTypes = { children: PropTypes.node.isRequired };

export default App;
