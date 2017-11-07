import React from 'react';
import PropTypes from 'prop-types';

const DeputeRankingListItem = ({ depute }) => {
  return (
    <div>
      {depute.depute_nom}
    </div>
  );
};

DeputeRankingListItem.propTypes = {
  depute: PropTypes.shape({}).isRequired,
};

export default DeputeRankingListItem;
