import React from 'react';
import Helmet from 'react-helmet';

import illustration from './assets/notfound.png';

import css from './NotFound.scss';

const NotFound = () => (
  <div className={`container ${css.module}`}>
    <Helmet>
      <title>Page non trouvée</title>
      <meta property="og:title" content="Page non trouvée | Observatoire de la Démocratie" />
    </Helmet>

    <h1>Page non trouvée !</h1>
    <img src={illustration} alt="Page non trouvée" />
  </div>
);

export default NotFound;
