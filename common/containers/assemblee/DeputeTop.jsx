import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchDeputeTop } from 'actions/assemblee';
import { getDeputeTop } from 'reducers';

import View from 'components/assemblee/DeputeTop';

class DeputeTop extends Component {
  static fetchData(dispatch, { location }) {
    return dispatch(fetchDeputeTop(location.search));
  }

  componentDidMount() {
    const { deputeTop, location } = this.props;
    if (deputeTop.search !== location.search) {
      this.fetchDeputeTop(location);
    }
  }

  componentWillReceiveProps({ location }) {
    if (this.props.location.search !== location.search) {
      this.fetchDeputeTop(location);
    }
  }

  fetchDeputeTop(location) {
    DeputeTop.fetchData(this.props.dispatch, { location });
  }

  render() {
    return (
      <View
        deputeTop={this.props.deputeTop}
        fetchDeputeTop={() => this.fetchDeputeTop(this.props.location)}
        router={this.props.router}
      />
    );
  }
}

DeputeTop.propTypes = {
  deputeTop: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  router: PropTypes.shape({}).isRequired,
};

export default connect(
  state => ({
    deputeTop: getDeputeTop(state),
  }),
)(DeputeTop);
