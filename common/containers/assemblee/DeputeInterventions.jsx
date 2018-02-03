import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import qs from 'qs';

import { fetchInterventions } from 'actions/assemblee';
import { getDeputeInterventions } from 'reducers';

import View from 'components/assemblee/depute/DeputeInterventions';

class DeputeInterventions extends Component {
  static fetchData(dispatch, { location, params }) {
    return dispatch(fetchInterventions(
      qs.stringify(
        {
          ...location.query,
          itemsperpage: 5,
          depute: params.id,
        },
        { addQueryPrefix: true },
      ),
    ));
  }

  componentDidMount() {
    const { deputeInterventions, location, params } = this.props;
    if (deputeInterventions.search !== location.search) {
      this.fetchInterventions(location, params);
    }
  }

  componentWillReceiveProps({ location, params }) {
    if (this.props.location.search !== location.search) {
      this.fetchInterventions(location, params);
    }
  }

  fetchInterventions(location, params) {
    DeputeInterventions.fetchData(this.props.dispatch, { location, params });
  }

  render() {
    return (
      <View
        deputeInterventions={this.props.deputeInterventions}
        fetchInterventions={() => this.fetchInterventions(this.props.location)}
        router={this.props.router}
      />
    );
  }
}

DeputeInterventions.propTypes = {
  deputeInterventions: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  params: PropTypes.shape({}).isRequired,
  router: PropTypes.shape({}).isRequired,
};

export default connect(
  state => ({
    deputeInterventions: getDeputeInterventions(state),
  }),
)(DeputeInterventions);
