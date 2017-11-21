import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import qs from 'qs';

import { searchDeputeInterventions, fetchDeputeInterventions } from 'actions/assemblee';
import { getDeputeInterventions } from 'reducers';

import View from 'components/assemblee/depute/DeputeInterventionsList';

class DeputeInterventionsList extends Component {
  componentDidMount() {
    this.fetchDeputeInterventions();
  }

  componentWillReceiveProps({ deputeInterventions }) {
    if (this.props.deputeInterventions.search !== deputeInterventions.search) {
      this.fetchDeputeInterventions(deputeInterventions.search);
    }
  }

  fetchDeputeInterventions(search) {
    this.props.fetchDeputeInterventions(qs.stringify({
      ...search,
      depute: this.props.deputeId,
      itemsperpage: 5,
    }, { addQueryPrefix: true }));
  }

  render() {
    const { error, isPending, pagination, search, interventions } = this.props.deputeInterventions;

    return (
      <View
        error={error}
        isPending={isPending}
        newSearch={this.props.searchDeputeInterventions}
        pagination={pagination}
        refetch={
          () => this.fetchDeputeInterventions(this.props.deputeInterventions.search)
        }
        search={search}
        interventions={interventions}
      />
    );
  }
}

DeputeInterventionsList.propTypes = {
  deputeId: PropTypes.string.isRequired,
  deputeInterventions: PropTypes.shape({
    interventions: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
    isPending: PropTypes.bool.isRequired,
    pagination: PropTypes.shape({}).isRequired,
    search: PropTypes.shape({}).isRequired,
  }).isRequired,
  fetchDeputeInterventions: PropTypes.func.isRequired,
  searchDeputeInterventions: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    deputeInterventions: getDeputeInterventions(state),
  }),
  { fetchDeputeInterventions, searchDeputeInterventions },
)(DeputeInterventionsList);
