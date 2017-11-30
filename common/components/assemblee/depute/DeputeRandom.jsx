import React from 'react';
import PropTypes from 'prop-types';

import { deputeTri } from 'utility';

import Spinner from 'components/reusable/Spinner';
import RequestError from 'components/reusable/RequestError';
import DeputeRankingListItem from 'components/assemblee/deputeList/DeputeRankingListItem';

import css from './DeputeRandom.scss';

const DeputeRandom = ({ depute, refetch }) => {
  if (depute === null) {
    return (
      <div className={css.whiteBlock}>
        <Spinner />
      </div>
    );
  }

  if (depute === false) {
    return (
      <div className={css.retry}>
        <RequestError retry={refetch} />
      </div>
    );
  }

  if (typeof window !== 'undefined') {
    return (
      <div className={css.module}>
        <DeputeRankingListItem
          depute={depute}
          stat={deputeTri[Math.floor(Math.random() * deputeTri.length)].value}
        />
      </div>
    );
  }

  // SSR no random
  return false;
};

DeputeRandom.propTypes = {
  depute: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  refetch: PropTypes.func.isRequired,
};

DeputeRandom.defaultProps = { depute: null };

export default DeputeRandom;
