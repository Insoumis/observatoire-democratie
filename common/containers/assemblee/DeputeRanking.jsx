import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchDeputeRanking } from 'actions/assemblee';
import { getDeputeRanking } from 'reducers';

import View from 'components/assemblee/DeputeRanking';

class DeputeRanking extends Component {
  static fetchData(dispatch, { location }) {
    return dispatch(fetchDeputeRanking(location.query.order, location.search));
  }

  componentDidMount() {
    const { deputeRanking, location } = this.props;
    if (deputeRanking.search !== location.search) {
      this.fetchDeputeRanking(location);
    }
  }

  componentWillReceiveProps({ location }) {
    if (this.props.location.search !== location.search) {
      this.fetchDeputeRanking(location);
    }
  }

  fetchDeputeRanking(location) {
    DeputeRanking.fetchData(this.props.dispatch, { location });
  }

  render() {
    return (
      <View
        deputeRanking={this.props.deputeRanking}
        fetchDeputeRanking={() => this.fetchDeputeRanking(this.props.location)}
        router={this.props.router}
      />
    );
  }
}

DeputeRanking.propTypes = {
  deputeRanking: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.shape({
    query: PropTypes.shape({}).isRequired,
    search: PropTypes.string.isRequired,
  }).isRequired,
  router: PropTypes.shape({}).isRequired,
};

export default connect(
  state => ({
    deputeRanking: getDeputeRanking(state),
  }),
)(DeputeRanking);
