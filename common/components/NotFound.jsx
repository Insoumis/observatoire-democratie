import React from 'react';

import illustration from './assets/notfound.png';

import css from './NotFound.scss';

const NotFound = () => (
  <div className={`container ${css.module}`}>
    <h1>Page non trouvée !</h1>
    <img src={illustration} alt="Page non trouvée" />
  </div>
);

export default NotFound;
