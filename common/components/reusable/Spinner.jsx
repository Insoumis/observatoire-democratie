import React from 'react';

import css from './Spinner.scss';

const Spinner = () => (
  <div className={css.module}>
    <div className={css.cube} />
    <div className={css.secondCube} />
    <div className={css.fourthCube} />
    <div className={css.thirdCube} />
  </div>
);

export default Spinner;
