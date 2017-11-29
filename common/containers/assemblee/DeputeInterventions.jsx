import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import qs from 'qs';

import { fetchDeputeInterventions } from 'actions/assemblee';
import { getDeputeInterventions } from 'reducers';

import Form from 'components/assemblee/depute/DeputeInterventionsForm';
import List from 'components/assemblee/depute/DeputeInterventionsList';

class DeputeInterventions extends Component {
  state = { currentSearch: this.getSearch() };

  componentDidMount() {
    const { search } = this.props.deputeInterventions;
    if (search !== this.state.currentSearch) {
      this.props.fetchDeputeInterventions(this.state.currentSearch);
    }
  }

  getSearch(search) {
    return qs.stringify({
      ...search,
      depute: this.props.deputeId,
      itemsperpage: 5,
    }, { addQueryPrefix: true });
  }

  newSearch(newSearch) {
    this.setState({ currentSearch: this.getSearch(newSearch) });
    this.props.fetchDeputeInterventions(this.getSearch(newSearch));
  }

  render() {
    const { error, isPending, pagination, search, interventions } = this.props.deputeInterventions;

    return (
      <div>
        <Form newSearch={newSearch => this.newSearch(newSearch)} />
        <List
          error={error}
          isPending={isPending}
          newSearch={newSearch => this.newSearch(newSearch)}
          pagination={pagination}
          refetch={
            () => this.props.fetchDeputeInterventions(this.state.currentSearch)
          }
          search={qs.parse(search, { ignoreQueryPrefix: true })}
          interventions={interventions}
        />
      </div>
    );
  }
}

DeputeInterventions.propTypes = {
  deputeId: PropTypes.string.isRequired,
  deputeInterventions: PropTypes.shape({
    interventions: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
    isPending: PropTypes.bool.isRequired,
    pagination: PropTypes.shape({}).isRequired,
    search: PropTypes.string.isRequired,
  }).isRequired,
  fetchDeputeInterventions: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    deputeInterventions: getDeputeInterventions(state),
  }),
  { fetchDeputeInterventions },
)(DeputeInterventions);
