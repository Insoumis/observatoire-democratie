import React from 'react';
import PropTypes from 'prop-types';

const DeputeTopListItem = ({ depute }) => {
  return (
    <div>
      {depute.depute_nom}
    </div>
  );
};

DeputeTopListItem.propTypes = {
  depute: PropTypes.shape({}).isRequired,
};

export default DeputeTopListItem;
